import React, { useState } from "react";
import "./App.css";
import HeaderApp from "../component/HeaderApp/HeaderApp.jsx";
import Footer from "../component/Footer/Footer.jsx";

import { Route, Switch } from "react-router-dom";

import MainPage from "../pages/MainPage/MainPage";
import BorderRadius from "../pages/BorderRadius/BorderRadius";
import BoxShadow from "../pages/BoxShadow/BoxShadow";
import BackgroundColor from "../pages/BackgroundColor/BackgroundColor";
import Text from "../pages/Text/Text";
import TextShadow from "../pages/TextShadow/TextShadow";
import NavSidebar from "../component/NavSidebar/NavSidebar";
import Translate from "../pages/Translate/Translate";
import Rotate from "../pages/Rotate/Rotate";
import Scale from "../pages/Scale/Scale";
import Skew from "../pages/Skew/Skew";

function App() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <>
            <HeaderApp />
            <div className="app">
                <NavSidebar
                    isSidebarOpen={isSidebarOpen}
                    setIsSidebarOpen={setIsSidebarOpen}
                />
                <div className="page-container">
                    <div className="container">
                        <div className="wrapper">
                            <Switch>
                                <Route path="/skew">
                                    <Skew />
                                </Route>
                                <Route path="/scale">
                                    <Scale />
                                </Route>
                                <Route path="/rotate">
                                    <Rotate />
                                </Route>
                                <Route path="/translate">
                                    <Translate />
                                </Route>
                                <Route path="/text-shadow">
                                    <TextShadow />
                                </Route>
                                <Route path="/text">
                                    <Text />
                                </Route>
                                <Route path="/background-color">
                                    <BackgroundColor />
                                </Route>
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
            </div>
        </>
    );
}

export default App;
