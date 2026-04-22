'use client';

import { Box, Container, Flex, Text } from '@chakra-ui/react';

export default function Header() {
  return (
    <Box
      as="header"
      position="sticky"
      top={0}
      zIndex={10}
      px={{ base: 4, md: 6 }}
      py={3}
    >
      <Box
        bg="rgba(244, 247, 254, 0.85)"
        backdropFilter="blur(20px)"
        border="1.5px solid"
        borderColor="secondaryGray.100"
        borderRadius="16px"
        px={{ base: 4, md: 6 }}
        py={3}
        boxShadow="0px 1px 11px 0px rgba(28, 35, 50, 0.06)"
      >
        <Flex align="center" justify="space-between">
          <Flex align="center" gap={3}>
            {/* Brand mark */}
            <Flex
              align="center"
              justify="center"
              w="32px"
              h="32px"
              bg="brand.500"
              borderRadius="8px"
            >
              <svg width="16" height="16" fill="none" viewBox="0 0 16 16">
                <path d="M3 13L8 3l5 10H3z" fill="white" opacity=".9" />
              </svg>
            </Flex>

            <Box>
              <Text
                fontSize="sm"
                fontWeight="700"
                color="navy.700"
                letterSpacing="-0.3px"
                lineHeight="1.2"
              >
                Axil OS
              </Text>
              <Text fontSize="10px" fontWeight="500" color="secondaryGray.600" lineHeight="1.2">
                Operations Discovery
              </Text>
            </Box>
          </Flex>

          <Flex
            align="center"
            gap={2}
            bg="brand.50"
            borderRadius="full"
            px={3}
            py={1}
          >
            <Box w="6px" h="6px" bg="brand.500" borderRadius="full" />
            <Text fontSize="11px" fontWeight="600" color="brand.600">
              Survey Live
            </Text>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
}
