import { red } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    md: true;
    mdBold: true;
    sm: true;
    body4: true;
  }
}

declare module "@mui/material/styles/createTypography" {
  // allow configuration using `createTheme`
  interface TypographyOptions {
    md: Record<string, unknown>;
    mdBold: Record<string, unknown>;
    sm: Record<string, unknown>;
    body4: Record<string, unknown>;
  }
}

declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    xs: true;
    sm: true;
    md: true;
    sm_desktop: true;
    lg: true;
    xl: true;
  }
}

const theme = createTheme({
  palette: {
    primary: {
      main: "#0041c0",
      light: "#5987E0",
    },
    secondary: {
      main: "#19857b",
    },
    text: {
      primary: "#343434",
      secondary: "#707070",
      disabled: "#AFAFAF",
    },
    info: {
      main: "#EFF4FF",
      dark: "#E3E3E3",
      light: "#FFF",
    },
    error: {
      main: red["500"],
    },
    background: {
      default: "#fff",
    },
  },
  typography: {
    fontSize: 16,
    fontFamily: ["NotoSansJpRegular", "Roboto"].join(","),
    body1: {
      fontSize: "1rem",
      wordBreak: "break-word",
      whiteSpace: "pre-line",
    },
    subtitle1: {
      fontSize: "0.875rem",
      wordBreak: "break-word",
      whiteSpace: "pre-line",
    },
    subtitle2: {
      fontSize: 12,
      wordBreak: "break-word",
      whiteSpace: "pre-line",
    },
    h4: {
      fontSize: "1.75rem",
      fontFamily: "NotoSansJpBold",
      wordBreak: "break-word",
      whiteSpace: "pre-line",
    },
    h5: {
      fontSize: "1.25rem",
      fontFamily: "NotoSansJpBold",
      wordBreak: "break-word",
      whiteSpace: "pre-line",
    },
    h6: {
      fontSize: "1rem",
      fontFamily: "NotoSansJpBold",
      wordBreak: "break-word",
      whiteSpace: "pre-line",
    },
    md: {
      fontSize: 18,
      lineHeight: "25px",
    },
    sm: {
      fontSize: 12,
      lineHeight: "24px",
    },
    body4: {
      fontSize: "28px",
      lineHeight: "38px",
    },
    mdBold: {
      fontSize: 18,
      lineHeight: "25px",
      fontFamily: "NotoSansJpBold",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      sm_desktop: 1024,
      lg: 1200,
      xl: 1536,
    },
  },
});

export default theme;
