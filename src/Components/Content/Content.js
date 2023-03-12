import {Route, Routes} from "react-router-dom";

import Categories from "./Categories/Categories";
import Events from "./Events/Events";
import About from "./About/About";
import Profile from "./Profile/Profile";

import styles from "./Content.module.css"

const Content = () => {
    return <div className={styles.wrapper}>
        <Routes>
            <Route path="/profile" element={<Profile/>}></Route>
            <Route path="/categories" element={<Categories/>}></Route>
            <Route path="/events" element={<Events/>}></Route>
            <Route path="/about" element={<About/>}></Route>
        </Routes>
    </div>
}

export default Content