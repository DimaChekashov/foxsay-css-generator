import React from "react";
import "./HeaderApp.scss";

function HeaderApp(props) {
    return (
        <header className="header-app">
            <button 
                className="header-btn"
                onClick={() => props.setIsSidebarOpen(!props.isSidebarOpen)}
                >
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
            </button>
            <h2 className="header-title">FoxSay CSS Generator</h2>
        </header>
    );
}

export default HeaderApp;
