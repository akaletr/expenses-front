import {Route, Routes} from "react-router-dom";
import {} from "./App.module.css"
import {HomePage} from "./pages/HomePage";
import {Profile} from "./pages/Profile";
import {Categories} from "./pages/categories/Categories";
import {Header} from "./components/header/Header";

function App() {
    return <>
        <Header/>
        <Routes>
            <Route path={"/"} element={<HomePage/>}/>
            <Route path={"/profile"} element={<Profile/>}/>
            <Route path={"/categories"} element={<Categories/>}/>
            <Route path={"/home"} element={<HomePage/>}/>
        </Routes>
    </>
}

export default App;
