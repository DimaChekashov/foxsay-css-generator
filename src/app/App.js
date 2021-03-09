import React from "react";
import "./App.css";
import HeaderApp from "../component/HeaderApp/HeaderApp";
import MainPage from "../pages/MainPage/MainPage";
import BorderRadius from "../pages/BorderRadius/BorderRadius";
import { Route, Switch } from "react-router-dom";

function App() {
    return (
        <>
            <HeaderApp />
            <Switch>
                <Route path="/border-radius">
                    <BorderRadius />
                </Route>
                <Route path="/">
                    <MainPage />
                </Route>
            </Switch>
        </>
    );
}

export default App;
