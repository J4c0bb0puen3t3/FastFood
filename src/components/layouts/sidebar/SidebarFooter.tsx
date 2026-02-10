import { useNavigate } from "react-router-dom";
import { MdSettings } from 'react-icons/md';
import "./SidebarFooter.css";

export default function SidebarFooter() {
  const navigate = useNavigate();

  return (
    <div className="sidebar-footer">
      <button
        onClick={() => navigate("/settings")}
        className="sidebar-footer__button"
        aria-label="Settings"
      >
        <span className="sidebar-footer__settings-icon">
          <MdSettings />
        </span>
      </button>
    </div>
  );
} 
