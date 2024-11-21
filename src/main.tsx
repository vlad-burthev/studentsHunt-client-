import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
//styles
import "./assets/styles/index.scss";

//App
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
