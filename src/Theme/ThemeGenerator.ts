import { COMPONENT_OVERRIDES } from "./../Common/Components/ComponentOverride";
import { Theme, createTheme } from "@mui/material";

export const themeGenerator = (): Theme => {
  const theme = createTheme({
    components: {
      ...COMPONENT_OVERRIDES,
    },
  });
  return theme;
};
