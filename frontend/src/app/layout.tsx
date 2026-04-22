import type { Metadata } from 'next';
import './globals.css';
import Providers from '@/components/providers/Providers';

export const metadata: Metadata = {
  title: 'Axil OS — Operations Discovery',
  description: 'Internal department survey for Axil Scientific',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
