import '@/lib/styles/globals.css';
import type { Metadata, Viewport } from 'next';
import { Figtree as FontBody } from 'next/font/google';

import { Provider } from '@/components/ui/provider';
import { Layout } from '@/lib/layout';

const fontBody = FontBody({
  subsets: ['latin'],
  variable: '--font-body',
});

type RootLayoutProps = {
  children: React.ReactNode;
};

const APP_NAME = 'Creator Card';

export const metadata: Metadata = {
  title: { default: APP_NAME, template: '%s | Creator Card' },
  description: 'Credit Card Designed For Creators',
  applicationName: APP_NAME,
  appleWebApp: {
    capable: true,
    title: APP_NAME,
    statusBarStyle: 'default',
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    url: 'https://nextarter-chakra.sznm.dev',
    title: 'Creator Card',
    description: 'Credit Card Designed For Creators',
    images: {
      url: 'https://og-image.sznm.dev/**nextarter-chakra**.sznm.dev.png?theme=dark&md=1&fontSize=125px&images=https%3A%2F%2Fsznm.dev%2Favataaars.svg&widths=250',
      alt: 'nextarter-chakra.sznm.dev og-image',
    },
  },
  twitter: {
    creator: '@agstnsnathaniel',
    card: 'summary_large_image',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#FFFFFF',
};

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en" suppressHydrationWarning className={fontBody.className}>
      <body>
        <Provider>
          <Layout>{children}</Layout>
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;
