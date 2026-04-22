'use client';

import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  VStack,
} from '@chakra-ui/react';
import { useState } from 'react';
import PageWrapper from '@/components/layout/PageWrapper';
import AdminDashboard from '@/components/admin/AdminDashboard';

type AdminPhase = 'login' | 'dashboard';

interface AdminUser {
  id: string;
  email: string;
  name: string;
}

export default function AdminPage() {
  const [phase, setPhase]               = useState<AdminPhase>('login');
  const [admin, setAdmin]               = useState<AdminUser | null>(null);
  const [email, setEmail]               = useState('');
  const [password, setPassword]         = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading]           = useState(false);
  const [error, setError]               = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const res = await fetch('/api/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ email: email.trim(), password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error ?? 'Something went wrong.');
        return;
      }

      setAdmin(data.admin);
      setPhase('dashboard');
    } catch {
      setError('Could not connect. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    await fetch('/api/auth', { method: 'DELETE', credentials: 'include' });
    setAdmin(null);
    setEmail('');
    setPassword('');
    setPhase('login');
  };

  if (phase === 'dashboard') {
    return (
      <PageWrapper maxW="6xl">
        <AdminDashboard adminName={admin?.name ?? ''} onLogout={handleLogout} />
      </PageWrapper>
    );
  }

  return (
    <PageWrapper>
      <Box maxW="sm" mx="auto">
        {/* Logo mark */}
        <Flex align="center" gap={3} mb={8}>
          <Flex
            align="center"
            justify="center"
            w="44px"
            h="44px"
            bg="brand.500"
            borderRadius="12px"
            flexShrink={0}
          >
            <svg width="20" height="20" fill="none" viewBox="0 0 16 16">
              <path d="M3 13L8 3l5 10H3z" fill="white" />
            </svg>
          </Flex>
          <Box>
            <Text fontSize="sm" fontWeight="700" color="navy.700" lineHeight="1.2">
              Axil OS
            </Text>
            <Text fontSize="11px" color="secondaryGray.600" lineHeight="1.2">
              Admin Panel
            </Text>
          </Box>
        </Flex>

        {/* Login card */}
        <Box
          bg="white"
          borderRadius="20px"
          border="1px solid"
          borderColor="secondaryGray.100"
          boxShadow="0px 1px 11px 0px rgba(28, 35, 50, 0.04)"
          p={{ base: 7, md: 8 }}
        >
          <Heading size="md" color="navy.700" fontWeight="700" mb={1}>
            Sign in
          </Heading>
          <Text fontSize="sm" color="secondaryGray.700" mb={7}>
            Use your admin account to view survey responses.
          </Text>

          <Box as="form" onSubmit={handleLogin}>
            <VStack spacing={4} align="stretch">
              <FormControl isRequired>
                <FormLabel fontSize="sm" fontWeight="600" color="navy.700" mb={1.5}>
                  Email address
                </FormLabel>
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@axilscientific.com"
                  h="50px"
                  autoComplete="email"
                />
              </FormControl>

              <FormControl isRequired>
                <FormLabel fontSize="sm" fontWeight="600" color="navy.700" mb={1.5}>
                  Password
                </FormLabel>
                <InputGroup>
                  <Input
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    h="50px"
                    pr="5rem"
                    autoComplete="current-password"
                  />
                  <InputRightElement h="50px" w="5rem">
                    <Button
                      size="xs"
                      variant="ghost"
                      color="secondaryGray.600"
                      fontWeight="600"
                      onClick={() => setShowPassword((v) => !v)}
                      tabIndex={-1}
                    >
                      {showPassword ? 'Hide' : 'Show'}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>

              {error && (
                <Box
                  bg="red.50"
                  borderRadius="8px"
                  px={4}
                  py={3}
                  border="1px solid"
                  borderColor="red.100"
                >
                  <Text color="red.500" fontSize="sm" fontWeight="500">
                    {error}
                  </Text>
                </Box>
              )}

              <Button
                type="submit"
                isLoading={loading}
                loadingText="Signing in…"
                w="full"
                h="50px"
                fontSize="sm"
                fontWeight="600"
                mt={1}
              >
                Sign in
              </Button>
            </VStack>
          </Box>
        </Box>

        <Text fontSize="xs" color="secondaryGray.500" textAlign="center" mt={5}>
          No account yet? Run{' '}
          <Text as="span" fontFamily="mono" bg="secondaryGray.300" px={1} borderRadius="4px">
            npm run admin:create
          </Text>{' '}
          to create one.
        </Text>
      </Box>
    </PageWrapper>
  );
}
