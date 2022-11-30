import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { store } from '../src/store/store';
import { Provider } from 'react-redux';
import { CssBaseline } from '@mui/material';

import { StyledEngineProvider, ThemeProvider } from '@mui/material';

import theme from '../src/utils/theme';

function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <StyledEngineProvider>
        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </StyledEngineProvider>
    </Provider>
  );
}

export default App;
