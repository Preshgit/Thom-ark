import { ReactNode } from 'react';
import { CssBaseline } from '@mui/material';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { ThemeProvider as NextThemeProvider } from 'next-themes';

import './global.css';
import muiTheme from '../theme';

export const metadata = {
  title: 'Thom-ark',
  description:
    'Thom-Ark Nigeria Limited is a resourceful company complementing architectural designs for modernity and environmental sustainability with quality architectural and allied products & services.',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png', // optional if you have one
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='en'>
      <head>
        {/* Favicon fallback (Next.js handles it automatically if metadata is set) */}
        <link rel='icon' href='/favicon.ico' sizes='any' />

        {/* Prevent flash of wrong theme */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const theme = localStorage.getItem('theme');
                  if (theme === 'dark') {
                    document.documentElement.classList.add('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body>
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          {/* Wrap your app with NextThemeProvider first */}
          <NextThemeProvider
            attribute='class'
            defaultTheme='system'
            enableSystem
          >
            <MuiThemeProvider theme={muiTheme}>
              <CssBaseline />
              {children}
            </MuiThemeProvider>
          </NextThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
