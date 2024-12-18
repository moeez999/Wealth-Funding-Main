import { createTheme } from "@mui/material/styles";

const TuffxTheme = createTheme({
  palette: {
    primary: {
      main: "#FF8F1F",
    },
    secondary: {
      main: "#D0D0D0",
    },
  },
  typography: {
    fontFamily: "'Montserrat', sans-serif",
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          "& input::placeholder": {
            color: "#D0D0D0",
            padding: "0.2rem",
            fontSize: "0.75rem",
            fontWeight: 400,
            opacity: 1,
          },
          "&.Mui-focused input::placeholder": {
            color: "#FF8F1F",
          },
          "&:hover input::placeholder": {
            color: "#FF8F1F",
          },
        },
      },
    },
    MuiInputAdornment: {
      styleOverrides: {
        root: {
          color: "#D0D0D0", // Customize the color as needed
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          "& input::placeholder": {
            color: "#D0D0D0",
            padding: "0.2rem",
            fontSize: "0.75rem",
            fontWeight: 400,
            opacity: 1,
          },
          "&.Mui-focused input::placeholder": {
            color: "#FF8F1F",
          },
          "&:hover input::placeholder": {
            color: "#FF8F1F",
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          "&:hover": {
            backgroundColor: "#000",
            color: "#ff8f1f",
          },
        },
      },
    },
    // Add more component overrides as needed
  },
});

export default TuffxTheme;
