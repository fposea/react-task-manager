import { createTheme } from "@mui/material/styles";
import GelionRegular from "./assets/fonts/Gelion Regular.woff";
import GelionBold from "./assets/fonts/Gelion Bold.woff";
import GelionLight from "./assets/fonts/Gelion Light.woff";

const theme = createTheme({
  palette: {
    primary: {
      main: "#3754DB",
      light: "#F5F7FE",
    },
    secondary: {
      main: "#B80020",
      contrastText: "#FFF",
    },
    error: {
      main: "#FB151A",
    },
    warning: {
      main: "#EBA300",
    },
    info: {
      main: "#6684FF",
    },
    success: {
      main: "#00C271",
    },
    text: {
      primary: "#16171D",
      secondary: "#62667E",
      disabled: "#C2C4CF",
    },
    inProgress: {
      main: "#F2F4FD",
      contrastText: "#3754DB",
    },
    inReview: {
      main: "#F7F2FD",
      contrastText: "#8937DB",
    },
    completed: {
      main: "#F0FFF9",
      contrastText: "#00C271",
    },
    pending: {
      main: "#FFFDF5",
      contrastText: "#DF9A00",
    },
    unassigned: {
      main: "#FFF0F0",
      contrastText: "#B80020",
    },
  },
  typography: {
    fontFamily: "Gelion, Roboto, Arial",
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
            @font-face {
              font-family: 'Gelion';
              font-style: normal;
              font-display: swap;
              font-weight: 400;
              src: local('Gelion'), local('Gelion-Regular'), url(${GelionRegular}) format('woff');
              unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
            },
            @font-face {
                font-family: 'Gelion';
                font-style: bold;
                font-display: swap;
                font-weight: 700;
                src: local('Gelion'), local('Gelion-Bold'), url(${GelionBold}) format('woff');
                unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
              },
              @font-face {
                font-family: 'Gelion';
                font-style: light;
                font-display: swap;
                font-weight: 200;
                src: local('Gelion'), local('Gelion-Light'), url(${GelionLight}) format('woff');
                unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
              }
          `,
    },
    MuiBadge: {
      styleOverrides: {
        status: {
          padding: "5px 12px",
          whiteSpace: "nowrap",
          fontWeight: "600",
          fontSize: "12px",
          lineHeight: "14px",
          height: "23px",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        login: {
          width: "180px",
          height: "48px",
          border: "1.7px solid #3754DB",
          color: "#3754DB",
          fontWeight: "500",
          fontSize: "16px",
          lineHeight: "16px",
        },
        create: {
          width: "180px",
          height: "48px",
          border: "1.7px solid #3754DB",
          backgroundColor: "#fff",
          color: "#3754DB",
          fontWeight: "500",
          fontSize: "16px",
          lineHeight: "16px",
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        subtitle: {
          color: "#62667E",
        },
      },
    },
  },
});

export default theme;
