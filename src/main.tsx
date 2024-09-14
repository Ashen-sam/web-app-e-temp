import { createRoot } from "react-dom/client";
import App from "./App";
import "./App.css";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./Theme/Theme";

createRoot(document.getElementById("root")!).render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
);
