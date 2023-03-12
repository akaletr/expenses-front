import {NavLink} from "react-router-dom";
import styles from "./Sidebar.module.css"

const Sidebar = () => {
    return <div className="flex-column">
        <NavLink className={styles.item} to="/profile">Профиль</NavLink>
        <NavLink className={styles.item} to="/categories">Расход</NavLink>
        <NavLink className={styles.item} to="/events">Журнал</NavLink>
        <NavLink className={styles.item} to="/about">Статистика</NavLink>
    </div>
}

export default Sidebar