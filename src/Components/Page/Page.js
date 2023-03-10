import {Route, Routes} from "react-router-dom";
import CategoryList from "./CategoryList/CategoryList";
import EventList from "./EventList/EventList";
import About from "./About/About";
import styles from "./Page.module.css"

const Page = () => {
    return <div className={styles.wrapper}>
        <Routes>
            <Route path="/categories" element={<CategoryList/>}></Route>
            <Route path="/events" element={<EventList/>}></Route>
            <Route path="/about" element={<About/>}></Route>
        </Routes>
    </div>
}

export default Page