import React from 'react';
import {Route, Routes} from "react-router-dom";
import {HomePage} from "./pages/HomePage";
import {Profile} from "./pages/Profile";
import {Navbar} from "./components/Navbar";
import {Header} from "./components/header/Header";

function App() {
    return <>
        <Header/>
        <Navbar/>
        <Routes>
            <Route path={"/"} element={<HomePage/>}/>
            <Route path={"/profile"} element={<Profile/>}/>
        </Routes>
    </>
}

export default App;
