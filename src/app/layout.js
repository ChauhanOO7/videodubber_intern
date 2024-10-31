// import { MantineProvider } from '@mantine/core';
// import './globals.css';
// import '@mantine/core/styles.css';


// export default function App({ Component, pageProps }) {
//   return (
//     <MantineProvider withGlobalStyles withNormalizeCSS>
//       <Component {...pageProps} />
//     </MantineProvider>
//   );
// }

import { MantineProvider } from '@mantine/core';
import './globals.css';
import '@mantine/core/styles.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MantineProvider withGlobalStyles withNormalizeCSS>
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}