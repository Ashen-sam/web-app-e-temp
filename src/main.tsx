import { createRoot } from "react-dom/client";
import App from "./App";
import "./App.css";
import { ThemeProvider } from "@mui/material/styles";
import { themeGenerator } from "./Theme/ThemeGenerator";

createRoot(document.getElementById("root")!).render(
  <ThemeProvider theme={themeGenerator}>
    <App />
  </ThemeProvider>
);
