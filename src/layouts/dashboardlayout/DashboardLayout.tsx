import { Outlet } from "react-router-dom";
import TopBar from "../../components/layouts/topbar/TopBar";
import Sidebar from "../../components/layouts/sidebar/Sidebar";

import "./DashboardLayout.css";

export default function DashboardLayout() {
  return (
    <div className="dashboard-layout">
      <aside className="dashboard-sidebar">
        <Sidebar />
      </aside>

      <div className="dashboard-content">
        <header className="dashboard-topbar">
          <TopBar />
        </header>

        <main className="dashboard-main">
          <Outlet />
        </main>
      </div>

      {/* Columna 3: Panel derecho fijo */}
          {/* /<aside className="dashboard-right-panel">
            <AsidePanel />
          </aside> */}
          
    </div>
  );
}