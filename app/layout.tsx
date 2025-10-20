import { ReactNode } from 'react';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';

import './global.css';

import muiTheme from '../theme';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <head>
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
          <ThemeProvider theme={muiTheme}>
            <CssBaseline />
            {children}
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
