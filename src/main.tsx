import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <App />
    <Analytics /> 
    <SpeedInsights/>
  </BrowserRouter>
);
