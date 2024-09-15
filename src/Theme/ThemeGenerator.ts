import { COMPONENT_OVERRIDES } from "./../Common/Components/ComponentOverride";
import { Theme, createTheme } from "@mui/material";
import { customPalette } from "./Colors/CustomPalette";

export const themeGenerator = (): Theme => {
  const theme = createTheme({
    palette: customPalette,
    components: {
      ...COMPONENT_OVERRIDES,
    },
  });
  return theme;
};
