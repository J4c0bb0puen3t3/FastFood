import { useState } from "react";
import { HiOutlineSearch } from "react-icons/hi"; 
// import UserMenu from "./UserMenu";
import "./TopBar.css";

interface TopBarProps {
  onToggleSidebar?: () => void;
}

export default function TopBar({ onToggleSidebar }: TopBarProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [notificationsCount] = useState(3);
  const [showNotifications, setShowNotifications] = useState(false);

  return (
    <header className="topbar">
      {/* Botón menú móvil */}
      <button
        onClick={onToggleSidebar}
        className="topbar-menu-btn"
        aria-label="Abrir menú"
      >
        <span className="material-symbols-outlined">menu</span>
      </button>

      {/* Buscador */}
      <div className="topbar-search-wrapper">
        <div className="topbar-search">
          <span className="material-symbols-outlined topbar-search-icon">
            <HiOutlineSearch />
          </span>
          <input
            type="search"
            placeholder="Buscar..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="topbar-search-input"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="topbar-search-clear"
            >
              <span className="material-symbols-outlined"></span>
            </button>
          )}
        </div>
      </div>

      {/* Acciones de la derecha */}
      <div className="topbar-actions">
        {/* Notificaciones */}
        <div className="topbar-notifications">
          <button 
            onClick={() => setShowNotifications(!showNotifications)}
            className="topbar-notification-btn"
            aria-label="Notificaciones"
          >
            <span className="material-symbols-outlined">
              notifications
            </span>
            {notificationsCount > 0 && (
              <span className="topbar-notification-badge">
                {notificationsCount}
              </span>
            )}
          </button>

          {/* Dropdown de notificaciones */}
          {showNotifications && (
            <div className="topbar-notification-dropdown">
              <div className="topbar-notification-header">
                <h3>Notificaciones</h3>
              </div>
              <div className="topbar-notification-body">
                <p>No hay notificaciones nuevas</p>
              </div>
            </div>
          )}
        </div>

        {/* <UserMenu /> */}
      </div>
    </header>
  );
}