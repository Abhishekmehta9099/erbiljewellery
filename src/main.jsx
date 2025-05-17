import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

// Import Vercel Web Analytics
import { Analytics } from "@vercel/analytics/react";

import "./assets/styles/styles.css";
import "./assets/styles/queries.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <Analytics />
  </StrictMode>
);
