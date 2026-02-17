import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import IncomingTasks from "@src/pages/incomingTasks/IncomingTasks";
import "./assets/global.css";
import AppLayout from "@src/layouts/AppLayout/AppLayout";
import ThemeProvider from "./contexts/themeContext/ThemeProvider";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <AppLayout>
        <IncomingTasks />
      </AppLayout>
    </ThemeProvider>
  </StrictMode>,
);
