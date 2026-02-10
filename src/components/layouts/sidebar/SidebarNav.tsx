import { useNavigate, useLocation } from "react-router-dom";
import { GiHamburger } from "react-icons/gi";
import { MdCake } from "react-icons/md";
import { BiDrink } from "react-icons/bi";
import { IoFastFood } from "react-icons/io5";
import "./SidebarNav.css";


const navItems = [
  { path: "/pos/burgers", label: "Burgers", icon: <GiHamburger /> },
  { path: "/pos/sides", label: "Sides", icon: <MdCake /> },
  { path: "/pos/drinks", label: "Drinks", icon: <BiDrink /> },
  { path: "/", label: "Orders", icon: <IoFastFood /> },
];

export default function SidebarNav() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <nav className="sidebar-nav" aria-label="Primary navigation">
      {navItems.map(item => {
        const isActive = pathname.startsWith(item.path);

        return (
          <button
            key={item.path}
            onClick={() => navigate(item.path)}
            className={`sidebar-nav__button ${
              isActive ? "sidebar-nav__button--active" : ""
            }`}
            aria-current={isActive ? "page" : undefined}
          >
            <span className="material-symbols-outlined sidebar-nav__icon">
              {item.icon}
            </span>
            <span className="sidebar-nav__label">
              {item.label}
            </span>
          </button>
        );
      })}
    </nav>
  );
}
