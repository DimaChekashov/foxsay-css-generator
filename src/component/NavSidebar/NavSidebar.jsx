
import React from "react";
import { NavLink } from "react-router-dom";

import './NavSidebar.scss';

function NavSidebar(props) {

  return (
    <div className="nav-sidebar">
    <ul className="nav-sidebar__list">
      <li>
          <NavLink
              className="nav-sidebar__link"
              activeClassName="active-link"
              exact
              to="/"
          >
              Главная
          </NavLink>
      </li>  
    </ul>
    <h4 className="nav-sidebar__subtitle">Разное</h4>
      <ul className="nav-sidebar__list">
        <li>
            <NavLink
                className="nav-sidebar__link"
                activeClassName="active-link"
                to="/box-shadow"
            >
                BoxShadow
            </NavLink>
        </li>
        <li>
            <NavLink
                className="nav-sidebar__link"
                activeClassName="active-link"
                to="/border-radius"
            >
                BorderRadius
            </NavLink>
        </li>
        <li>
            <NavLink
                className="nav-sidebar__link"
                activeClassName="active-link"
                to="/background-color"
            >
                BackgroundColor
            </NavLink>
        </li>
      </ul>
      <h4 className="nav-sidebar__subtitle">Text</h4>
      <ul className="nav-sidebar__list">
        <li>
            <NavLink
                className="nav-sidebar__link"
                activeClassName="active-link"
                to="/text"
            >
                Text
            </NavLink>
        </li>
        <li>
            <NavLink
                className="nav-sidebar__link"
                activeClassName="active-link"
                to="/text-shadow"
            >
                TextShadow
            </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default NavSidebar;