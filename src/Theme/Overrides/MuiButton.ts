import { Components, Theme } from "@mui/material";

export const MuiButton: Components<Theme>["MuiButton"] = {
  defaultProps: {
    disableRipple: true,
    size: "small",
    variant: "contained",
    disableElevation: true,
  },
  styleOverrides: {
    root: ({ theme }) => ({
      borderRadius: "3px",
      fontSize: theme.typography.fontSize,
    }),
  },
};
