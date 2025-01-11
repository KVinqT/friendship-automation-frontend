import { Button, createTheme } from "@mantine/core";

export const theme = createTheme({
  cursorType: "pointer",
  focusRing: "auto",
  // primaryColor: "#0069d9",
  defaultRadius: "md",
  colors: {
    primary: [
      "#007bff",
      "#0069d9",
      "#005cb2",
      "#004f8a",
      "#004061",
      "#003138",
      "#002110",
      "#001100",
      "#000000",
      "#000000",
    ],
  },

  headings: {
    fontFamily: "Roboto, sans-serif",
    sizes: {
      h1: { fontSize: "4rem" },
      h2: { fontSize: "3rem" },
    },
  },
  radius: {
    xs: "2px",
    sm: "4px",
    md: "6px",
    lg: "8px",
    xl: "12px",
  },

  components: {
    Button: Button.extend({
      defaultProps: {
        color: "cyan",
        variant: "filled",
      },
    }),
  },
});
