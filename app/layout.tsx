import '@/styles/globals.css';

import { Metadata } from 'next';

import { CONFIG } from '@/config/app';
import { fontSans } from '@/lib/fonts';
import { cn } from '@/lib/utils';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/header';
import { TailwindIndicator } from '@/components/tailwind-indicator';
import { ThemeProvider } from '@/components/theme-provider';

export const metadata: Metadata = {
  title: {
    default: CONFIG.NAME,
    template: `%s - ${CONFIG.NAME}`,
  },
  description: CONFIG.DESCRIPTION,
  icons: {
    icon: 'favicon.ico',
    shortcut: 'favicon-96x96.png',
    apple: 'apple-touch-icon.png',
  },
};

export const viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body
          className={cn(
            'min-h-screen min-w-80 bg-background font-sans antialiased',
            fontSans.variable
          )}
        >
          <ThemeProvider
            defaultTheme="dark"
            enableSystem={false}
            attribute="class"
          >
            <div className="relative flex min-h-screen flex-col">
              <Header />
              <main className="grow flex flex-col container lg:max-w-screen-lg px-4 py-6">
                {children}
              </main>
            </div>
            <TailwindIndicator />
          </ThemeProvider>
          <Toaster />
        </body>
      </html>
    </>
  );
}
