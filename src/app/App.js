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
import BackgroundGradient from "../pages/BackgroundGradient/BackgroundGradient";
import BackgroundImage from "../pages/BackgroundImage/BackgroundImage";
import Blur from "../pages/Blur/Blur";
import Brightness from "../pages/Brightness/Brightness";
import Contrast from "../pages/Contrast/Contrast";
import Grayscale from "../pages/Grayscale/Grayscale";
import HueRotate from "../pages/HueRotate/HueRotate";
import Invert from "../pages/Invert/Invert";
import Saturate from "../pages/Saturate/Saturate";
import Sepia from "../pages/Sepia/Sepia";
import Cursor from "../pages/Cursor/Cursor";

function App() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <>
            <HeaderApp
                isSidebarOpen={isSidebarOpen}
                setIsSidebarOpen={setIsSidebarOpen}
            />
            <div className="app">
                <NavSidebar
                    isSidebarOpen={isSidebarOpen}
                    setIsSidebarOpen={setIsSidebarOpen}
                />
                <div className="page-container">
                    <div className="container">
                        <div className="wrapper">
                            <Switch>
                                <Route path="/cursor">
                                    <Cursor />
                                </Route>
                                <Route path="/sepia">
                                    <Sepia />
                                </Route>
                                <Route path="/saturate">
                                    <Saturate />
                                </Route>
                                <Route path="/invert">
                                    <Invert />
                                </Route>
                                <Route path="/hue-rotate">
                                    <HueRotate />
                                </Route>
                                <Route path="/grayscale">
                                    <Grayscale />
                                </Route>
                                <Route path="/contrast">
                                    <Contrast />
                                </Route>
                                <Route path="/brightness">
                                    <Brightness />
                                </Route>
                                <Route path="/blur">
                                    <Blur />
                                </Route>
                                <Route path="/background-image">
                                    <BackgroundImage />
                                </Route>
                                <Route path="/background-gradient">
                                    <BackgroundGradient />
                                </Route>
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
