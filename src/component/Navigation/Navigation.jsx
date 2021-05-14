import React from "react";

import "./Navigation.scss";
import { NavLink } from "react-router-dom";

function Navigation() {
    return (
        <div className="navigation">
            <NavLink
                className="navigation-btn"
                to="/box-shadow"
            >BoxShadow</NavLink>
            <NavLink
                className="navigation-btn"
                to="/border-radius"
            >BorderRadius</NavLink>
            <NavLink
                className="navigation-btn"
                to="/background-color"
            >BackgroundColor</NavLink>
        </div>
    );
}

export default Navigation;
