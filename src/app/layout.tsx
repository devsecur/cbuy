import './globals.scss';
import type { Metadata } from 'next';
import localFont from 'next/font/local';

const raleway = localFont({
  src: [
    {
      path: '../lib/assets/fonts/raleway/Raleway-VariableFont_wght.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../lib/assets/fonts/raleway/Raleway-Italic-VariableFont_wght.ttf',
      weight: '400',
      style: 'italic',
    },
  ],
  variable: '--font-raleway',
  display: 'swap',
  fallback: ['Helvetic'],
});
export const metadata: Metadata = {
  title: 'Cbuy',
  description: 'Cbuy',
  viewport: {
    initialScale: 1,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={raleway.className}>{children}</body>
    </html>
  );
}
