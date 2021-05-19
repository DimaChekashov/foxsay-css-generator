import React from "react";

import "./Navigation.scss";
import { NavLink } from "react-router-dom";

function Navigation() {
    return (
        <div className="navigation">
            <h3 className="navigation__label">Border</h3>
            <div className="navigation__group">
                <NavLink
                    className="navigation-btn"
                    to="/border-radius"
                >BorderRadius</NavLink>
                <NavLink
                    className="navigation-btn"
                    to="/box-shadow"
                >BoxShadow</NavLink>
            </div>
            <h3 className="navigation__label">Background</h3>
            <div className="navigation__group">
                <NavLink
                    className="navigation-btn"
                    to="/background-color"
                >BackgroundColor</NavLink>
                <NavLink
                    className="navigation-btn"
                    to="/background-gradient"
                >BackgroundGradient</NavLink>
                <NavLink
                    className="navigation-btn"
                    to="/background-image"
                >BackgroundImage</NavLink>
            </div>
            <h3 className="navigation__label">Transform</h3>
            <div className="navigation__group">
                <NavLink
                    className="navigation-btn"
                    to="/translate"
                >Translate</NavLink>
                <NavLink
                    className="navigation-btn"
                    to="/rotate"
                >Rotate</NavLink>
                <NavLink
                    className="navigation-btn"
                    to="/scale"
                >Scale</NavLink>
                <NavLink
                    className="navigation-btn"
                    to="/skew"
                >Skew</NavLink>
            </div>
            <h3 className="navigation__label">Filter</h3>
            <div className="navigation__group">
                <NavLink
                    className="navigation-btn"
                    to="/blur"
                >Blur</NavLink>
                <NavLink
                    className="navigation-btn"
                    to="/brightness"
                >Brightness</NavLink>
                <NavLink
                    className="navigation-btn"
                    to="/contrast"
                >Contrast</NavLink>
                <NavLink
                    className="navigation-btn"
                    to="/grayscale"
                >Grayscale</NavLink>
                <NavLink
                    className="navigation-btn"
                    to="/hue-rotate"
                >Hue-rotate</NavLink>
                <NavLink
                    className="navigation-btn"
                    to="/invert"
                >Invert</NavLink>
                <NavLink
                    className="navigation-btn"
                    to="/saturate"
                >Saturate</NavLink>
                <NavLink
                    className="navigation-btn"
                    to="/sepia"
                >Sepia</NavLink>
            </div>
            <h3 className="navigation__label">Text</h3>
            <div className="navigation__group">
                <NavLink
                    className="navigation-btn"
                    to="/text"
                >Text</NavLink>
                <NavLink
                    className="navigation-btn"
                    to="/text-shadow"
                >TextShadow</NavLink>
            </div>
            <h3 className="navigation__label">Miscellaneous</h3>
            <div className="navigation__group">
                <NavLink
                    className="navigation-btn"
                    to="/cursor"
                >Cursor</NavLink>
            </div>
        </div>
    );
}

export default Navigation;
