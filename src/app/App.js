import React from "react";
import "./App.css";
import HeaderApp from "../component/HeaderApp/HeaderApp.jsx";
import Footer from "../component/Footer/Footer.jsx";
import MainPage from "../pages/MainPage/MainPage";
import BorderRadius from "../pages/BorderRadius/BorderRadius";
import BoxShadow from "../pages/BoxShadow/BoxShadow";
import { Route, Switch } from "react-router-dom";

function App() {
    return (
        <div className="page-container">
            <HeaderApp />
            <div className="container">
                <div className="wrapper">
                    <Switch>
                        <Route path="/border-radius">
                            <BorderRadius />
                        </Route>
                        <Route path="/box-shadow">
                            <BoxShadow />
                        </Route>
                        <Route path="/">
                            <MainPage />
                        </Route>
                    </Switch>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default App;
