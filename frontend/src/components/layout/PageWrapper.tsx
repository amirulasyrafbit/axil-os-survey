'use client';

import { Box, Container } from '@chakra-ui/react';
import Header from './Header';

interface PageWrapperProps {
  children: React.ReactNode;
  maxW?: string;
}

export default function PageWrapper({ children, maxW = '2xl' }: PageWrapperProps) {
  return (
    <Box minH="100vh" bg="background.100">
      <Header />
      <Container maxW={maxW} py={{ base: 8, md: 12 }} px={{ base: 4, md: 6 }}>
        {children}
      </Container>
    </Box>
  );
}
