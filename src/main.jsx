import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './app/App'
import { registerSW } from "virtual:pwa-register"; // 👉 registro del Service Worker (PWA)

registerSW({
  onNeedRefresh() {
    console.log("🔄 Nueva versión disponible");
  },
  onOfflineReady() {
    console.log("📦 App lista para usarse offline");
  },
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
