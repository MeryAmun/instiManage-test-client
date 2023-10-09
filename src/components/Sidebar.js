import React, { useState } from "react";
import { Link } from "react-router-dom";
import { sidebarData } from "../data";
import "./styles.css";

const Sidebar = ({ toggleWidth, handleActive }) => {
  const [activeId, setActiveId] = useState(null);

  return (
    <div className="sidebar">
        <div
      className="sidebar__links">
      <div className="sidebar__logo" onClick={handleActive}>
        <h4>LOGO</h4>
      </div>
      {sidebarData.map((item) => (
        <div className="sidebar__link-container" key={item.id} onClick={() => setActiveId(item.id)}>
          <Link
            to={item.link}
            className={
              activeId === item.id
                ? "sidebar__link sidebar__link-title-active"
                : "sidebar__link sidebar__link-title"
            }
          >
            {
              <item.icon
                size={20}
                className={
                  activeId === item.id
                    ? "sidebar__link-icon-active"
                    : "sidebar__link-icon"
                }
              />
            }
            <span
              className={
                activeId === item.id
                  ? "sidebar__link-title-active "
                  : "sidebar__link-title "
              }
            >
              {item.title}
            </span>
          </Link>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Sidebar;
