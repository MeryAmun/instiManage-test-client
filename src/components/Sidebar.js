import React, { useState } from "react";
import { Link } from "react-router-dom";
import { sidebarData } from "../data";
import "./styles.css";

const Sidebar = ({ active, setActive }) => {
  const [activeId, setActiveId] = useState(null);

  return (
    <div className="sidebar">
      <div className={ active ? "sidebar__links" : "sidebar__links-active"}>
        <div className="sidebar__logo" onClick={setActive}>
          <h4>CLOSE</h4>
        </div>
        {sidebarData.map((item) => (
          <div
            className="sidebar__link-container"
            key={item.id}
            onClick={() => setActiveId(item.id)}
          >
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
