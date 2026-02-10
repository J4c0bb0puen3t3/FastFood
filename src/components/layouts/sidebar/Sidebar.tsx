import { useNavigate } from "react-router-dom";
import SidebarNav from "./SidebarNav";
import SidebarFooter from "./SidebarFooter";
import "./Sidebar.css";

export default function Sidebar() {
  const navigate = useNavigate();

  return (
    <aside className="sidebar">
      {/* Logo */}
      <button
        onClick={() => navigate("/products")}
        className="sidebar-logo"
        aria-label="Home"
      >
        <span className="material-symbols-outlined">
          fastfood
        </span>
      </button>

      <SidebarNav />

      <SidebarFooter />
    </aside>
  );
}
