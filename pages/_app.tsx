import "../styles/globals.css";
import type { AppProps } from "next/app";
import { store } from "../src/store/store";
import { Provider } from "react-redux";
import { StyledEngineProvider, ThemeProvider } from "@mui/material";

import theme from "../src/utils/theme";

function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <StyledEngineProvider>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </StyledEngineProvider>
    </Provider>
  );
}

export default App;
