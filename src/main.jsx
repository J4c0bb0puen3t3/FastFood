import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './app/App'
import { HashRouter } from "react-router-dom";
import { registerSW } from "virtual:pwa-register"; // 👉 registro del Service Worker (PWA)
import { BrowserRouter } from "react-router-dom";

registerSW({
  onNeedRefresh() {
    console.log("🔄 Nueva versión disponible");
  },
  onOfflineReady() {
    console.log("📦 App lista para usarse offline");
  },
});

createRoot(document.getElementById('root')).render(
<BrowserRouter basename="/FastFood">
  <App />
</BrowserRouter>
)
