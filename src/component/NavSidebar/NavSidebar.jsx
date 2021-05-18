
import React from "react";
import { NavLink } from "react-router-dom";

import './NavSidebar.scss';

function NavSidebar(props) {

  return (
    <div className={`nav-sidebar${props.isSidebarOpen ? ' active' : ''}`} onClick={() => props.setIsSidebarOpen(false)}>
        <div className="nav-sidebar__wrapper">
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
            <h4 className="nav-sidebar__subtitle">Border</h4>
            <ul className="nav-sidebar__list">
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
                        to="/box-shadow"
                    >
                        BoxShadow
                    </NavLink>
                </li>
            </ul>
            <h4 className="nav-sidebar__subtitle">Background</h4>
            <ul className="nav-sidebar__list">
                <li>
                    <NavLink
                        className="nav-sidebar__link"
                        activeClassName="active-link"
                        to="/background-color"
                    >
                        BackgroundColor
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className="nav-sidebar__link"
                        activeClassName="active-link"
                        to="/background-gradient"
                    >
                        BackgroundGradient
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className="nav-sidebar__link"
                        activeClassName="active-link"
                        to="/background-image"
                    >
                        BackgroundImage
                    </NavLink>
                </li>
            </ul>
            <h4 className="nav-sidebar__subtitle">Transform</h4>
            <ul className="nav-sidebar__list">
                <li>
                    <NavLink
                        className="nav-sidebar__link"
                        activeClassName="active-link"
                        to="/translate"
                    >
                        Translate
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className="nav-sidebar__link"
                        activeClassName="active-link"
                        to="/rotate"
                    >
                        Rotate
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className="nav-sidebar__link"
                        activeClassName="active-link"
                        to="/scale"
                    >
                        Scale
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className="nav-sidebar__link"
                        activeClassName="active-link"
                        to="/skew"
                    >
                        Skew
                    </NavLink>
                </li>
            </ul>
            <h4 className="nav-sidebar__subtitle">Filter</h4>
            <ul className="nav-sidebar__list">
                <li>
                    <NavLink
                        className="nav-sidebar__link"
                        activeClassName="active-link"
                        to="/blur"
                    >
                        Blur
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className="nav-sidebar__link"
                        activeClassName="active-link"
                        to="/brightness"
                    >
                        Brightness
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className="nav-sidebar__link"
                        activeClassName="active-link"
                        to="/contrast"
                    >
                        Contrast
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className="nav-sidebar__link"
                        activeClassName="active-link"
                        to="/grayscale"
                    >
                        Grayscale
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className="nav-sidebar__link"
                        activeClassName="active-link"
                        to="/hue-rotate"
                    >
                        Hue-rotate
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className="nav-sidebar__link"
                        activeClassName="active-link"
                        to="/invert"
                    >
                        Invert
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className="nav-sidebar__link"
                        activeClassName="active-link"
                        to="/saturate"
                    >
                        Saturate
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className="nav-sidebar__link"
                        activeClassName="active-link"
                        to="/sepia"
                    >
                        Sepia
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
    </div>
  );
};

export default NavSidebar;