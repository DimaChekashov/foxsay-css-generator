import React from "react";
import Navigation from "../../component/Navigation/Navigation";

import "./MainPage.css";

function MainPage() {
    return (
        <div className="main">
            <h1 className="title">FoxSay CSS Generator</h1>
            <h3 className="subtitle">Генератор CSS свойств</h3>
            <Navigation />
        </div>
    );
}

export default MainPage;
