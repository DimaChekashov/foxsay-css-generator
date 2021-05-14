import React from "react";
import { NavLink } from "react-router-dom";
import "./HeaderApp.scss";

function HeaderApp() {
    return (
        <header className="header-app">
            <h2 className="header-title">FoxSay CSS Generator</h2>
            <ul className="header-navbar">
                <li>
                    <NavLink
                        className="navbar-link"
                        activeClassName="active-link"
                        exact
                        to="/"
                    >
                        Главная
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className="navbar-link"
                        activeClassName="active-link"
                        to="/box-shadow"
                    >
                        BoxShadow
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className="navbar-link"
                        activeClassName="active-link"
                        to="/border-radius"
                    >
                        BorderRadius
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className="navbar-link"
                        activeClassName="active-link"
                        to="/background-color"
                    >
                        BackgroundColor
                    </NavLink>
                </li>
            </ul>
        </header>
    );
}

export default HeaderApp;
