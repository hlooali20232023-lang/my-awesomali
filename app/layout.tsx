import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Nexa Studio',
  description: 'Premium digital products and lifestyle essentials.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
