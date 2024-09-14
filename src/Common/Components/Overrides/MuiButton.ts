import { Components, Theme } from "@mui/material";

export const MuiButton: Components<Theme>["MuiButton"] = {
  defaultProps: {
    disableRipple: true,
    size: "small",
    variant: "contained",
  },
  styleOverrides: {
    root: ({ theme }) => ({
      borderRadius: "3px",
      fontSize: theme.typography.fontSize,
    }),
  },
  variants: [
    {
      props: { variant: "contained" },
      style: {
        backgroundColor: themeColors.primary,
      },
    },
    {
      props: { variant: "redContained" },
      style: {
        backgroundColor: themeColors.error,
        color: themeColors.white,
      },
    },
    {
      props: { variant: "grayOutlined" },
      style: {
        border: `1px solid `,
      },
    },
  ],
};
