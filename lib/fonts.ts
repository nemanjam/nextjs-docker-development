import {
  JetBrains_Mono as FontMono,
  IBM_Plex_Sans as FontSans,
} from 'next/font/google';

export const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: '500',
});

export const fontMono = FontMono({
  subsets: ['latin'],
  variable: '--font-mono',
});
