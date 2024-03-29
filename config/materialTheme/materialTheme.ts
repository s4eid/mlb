import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

// Create a theme instance.
const theme = createTheme({
  status: {
    danger: "#e52e3e",
  },
  typography: {
    fontFamily: `"Noto Sans", "Source Code Pro", sans-serif`,
  },
  palette: {
    primary: {
      main: "#DD9933",
      // dark: "#2e33eb",
      // light: "#2d69eb",
    },
    therd: {
      main: "#C1C1C1",
      dark: "#fbfbfb",
      // light: "#2d69eb",
    },
    secondary: {
      main: "#FFFFFF",
      // light: "#666666",
      // dark: "#383838",
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
