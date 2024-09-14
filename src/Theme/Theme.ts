import { createTheme } from "@mui/material";
import { blue, green } from "@mui/material/colors";

export const theme = createTheme({
  palette: {
    primary: blue,
    secondary: green,
  },

  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          // Padding: "14px",
          // borderRadius: "12px",
        },
      },
    },

    MuiButton: {
      defaultProps: {
        disableRipple: true,
        disableElevation: true,
      },

      styleOverrides: {
        root: {
          textTransform: "none",
          "&:hover": { backgroundColor: "#000" },
        },
      },
    },
  },
});
