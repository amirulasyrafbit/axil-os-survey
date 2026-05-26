'use client';

import {
  Badge,
  Box,
  Button,
  Flex,
  Heading,
  Spinner,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  VStack,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { SurveyResponse } from '@/types';
import { formatDate } from '@/utils/formatDate';
import ResponseDetail from './ResponseDetail';

const DEPT_COLORS: Record<string, string> = {
  production:      'blue',
  warehouse:       'orange',
  qc:              'purple',
  finance:         'green',
  'customer-care': 'pink',
  'pre-sales':     'teal',
  procurement:     'cyan',
  courier:         'yellow',
  'lab-services':  'red',
};

interface AdminDashboardProps {
  adminName: string;
  onLogout: () => void;
}

export default function AdminDashboard({ adminName, onLogout }: AdminDashboardProps) {
  const [responses, setResponses] = useState<SurveyResponse[]>([]);
  const [loading, setLoading]     = useState(true);
  const [error, setError]         = useState<string | null>(null);
  const [selected, setSelected]   = useState<SurveyResponse | null>(null);
  const [exporting, setExporting] = useState(false);

  useEffect(() => {
    fetch('/api/admin/responses', { credentials: 'include' })
      .then((r) => { if (!r.ok) throw new Error('Unauthorised'); return r.json(); })
      .then(setResponses)
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false));
  }, []);

  const handleExport = async () => {
    setExporting(true);
    try {
      const res = await fetch('/api/admin/export', { credentials: 'include' });
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `axil-os-survey-export-${Date.now()}.csv`;
      a.click();
      URL.revokeObjectURL(url);
    } finally {
      setExporting(false);
    }
  };

  if (loading) return (
    <VStack justify="center" align="center" minH="50vh">
      <Spinner size="xl" color="brand.500" thickness="3px" />
    </VStack>
  );

  if (error) return (
    <VStack justify="center" align="center" minH="50vh">
      <Text color="red.500">{error}</Text>
    </VStack>
  );

  if (selected) return <ResponseDetail response={selected} onBack={() => setSelected(null)} />;

  const grouped = responses.reduce<Record<string, SurveyResponse[]>>((acc, r) => {
    if (!acc[r.department]) acc[r.department] = [];
    acc[r.department].push(r);
    return acc;
  }, {});

  const totalCompleted = responses.filter((r) => r.completed).length;

  return (
    <Box>
      {/* Header row */}
      <Flex justify="space-between" align="flex-start" mb={8} wrap="wrap" gap={4}>
        <Box>
          <Heading size="lg" color="navy.700" fontWeight="700" mb={1}>
            Survey Responses
          </Heading>
          <Flex align="center" gap={2} mt={1}>
            <Box bg="secondaryGray.300" borderRadius="full" px={3} py={0.5}>
              <Text fontSize="xs" fontWeight="600" color="secondaryGray.700">
                {responses.length} total
              </Text>
            </Box>
            <Box bg="brand.50" borderRadius="full" px={3} py={0.5}>
              <Text fontSize="xs" fontWeight="600" color="brand.600">
                {totalCompleted} completed
              </Text>
            </Box>
          </Flex>
        </Box>
        <Flex gap={2} align="center">
          {adminName && (
            <Text fontSize="sm" color="secondaryGray.600" fontWeight="500">
              Hi, {adminName.split(' ')[0]}
            </Text>
          )}
          <Button
            onClick={onLogout}
            variant="ghost"
            size="sm"
            h="38px"
            px={4}
            fontSize="sm"
            fontWeight="600"
            color="secondaryGray.700"
          >
            Sign out
          </Button>
          <Button
            onClick={handleExport}
            isLoading={exporting}
            variant="outline"
            size="sm"
            h="38px"
            px={5}
            fontSize="sm"
            fontWeight="600"
            borderColor="secondaryGray.100"
            color="navy.700"
            leftIcon={<DownloadIcon />}
            _hover={{ bg: 'secondaryGray.300' }}
          >
            Export CSV
          </Button>
        </Flex>
      </Flex>

      <VStack spacing={6} align="stretch">
        {Object.entries(grouped).map(([dept, deptResponses]) => (
          <Box
            key={dept}
            bg="white"
            borderRadius="16px"
            border="1px solid"
            borderColor="secondaryGray.100"
            boxShadow="0px 1px 11px 0px rgba(28, 35, 50, 0.04)"
            overflow="hidden"
          >
            {/* Section header */}
            <Flex align="center" gap={3} px={6} py={4} borderBottom="1px solid" borderColor="secondaryGray.100">
              <Badge colorScheme={DEPT_COLORS[dept] ?? 'gray'} variant="subtle" fontSize="11px" px={3} py={1}>
                {dept.replace(/-/g, ' ')}
              </Badge>
              <Text fontSize="xs" fontWeight="600" color="secondaryGray.600">
                {deptResponses.length} response{deptResponses.length !== 1 ? 's' : ''}
              </Text>
            </Flex>

            <Table size="sm">
              <Thead bg="secondaryGray.300">
                <Tr>
                  <Th fontSize="10px" color="secondaryGray.700" fontWeight="700" letterSpacing="wider" py={3}>Name</Th>
                  <Th fontSize="10px" color="secondaryGray.700" fontWeight="700" letterSpacing="wider">Email</Th>
                  <Th fontSize="10px" color="secondaryGray.700" fontWeight="700" letterSpacing="wider">Status</Th>
                  <Th fontSize="10px" color="secondaryGray.700" fontWeight="700" letterSpacing="wider">Submitted</Th>
                  <Th />
                </Tr>
              </Thead>
              <Tbody>
                {deptResponses.map((r) => (
                  <Tr
                    key={r.id}
                    cursor="pointer"
                    transition=".15s background ease"
                    _hover={{ bg: 'secondaryGray.300' }}
                    onClick={() => setSelected(r)}
                  >
                    <Td py={4}>
                      <Text fontSize="sm" fontWeight="600" color="navy.700">{r.respondentName}</Text>
                    </Td>
                    <Td>
                      <Text fontSize="sm" color="secondaryGray.700">{r.respondentEmail}</Text>
                    </Td>
                    <Td>
                      <Badge
                        colorScheme={r.completed ? 'green' : 'yellow'}
                        variant="subtle"
                        fontSize="10px"
                        px={3} py={1}
                      >
                        {r.completed ? 'Complete' : 'In progress'}
                      </Badge>
                    </Td>
                    <Td>
                      <Text fontSize="xs" color="secondaryGray.600">{formatDate(r.createdAt)}</Text>
                    </Td>
                    <Td>
                      <Text fontSize="xs" fontWeight="700" color="brand.500">View →</Text>
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </Box>
        ))}
      </VStack>
    </Box>
  );
}

function DownloadIcon() {
  return (
    <svg width="14" height="14" fill="none" viewBox="0 0 16 16">
      <path d="M8 3v8M5 8l3 3 3-3M3 13h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
