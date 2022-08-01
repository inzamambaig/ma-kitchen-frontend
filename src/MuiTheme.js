import { createTheme } from "@material-ui/core";

const theme = createTheme({
  palette: {
    common: {
      primary: { main: "#F38828", light: "#FFA04A" },
      secondary: { main: "#43AA34", light: "#009A5D" },

      yellow: "#D09A0A",
      green: "#86B817",
      dark: "#000000",
      lightDark: "#111111",
      white: "#fff",
      gray: "#808080",
      blue: "#60AFFF",
    },
  },
  typography: {
    fontFamily: ["Nunito", "sans-serif"].join(","),
  },
});
export default theme;
