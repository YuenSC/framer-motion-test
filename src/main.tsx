import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import ScrollIndicator from "./components/ScrollIndicator.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ScrollIndicator />
    <App />
  </StrictMode>,
);
