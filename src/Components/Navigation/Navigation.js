import {Link} from "react-router-dom";
import styles from "./Navigation.module.css"

const Navigation = () => {
    return <div className={styles.wrapper}>
        <Link className={styles.item} to="/profile">Профиль</Link>
        <Link className={styles.item} to="/categories">Категории</Link>
        <Link className={styles.item} to="/events">Журнал</Link>
        <Link className={styles.item} to="/about">Статистика</Link>
    </div>
}

export default Navigation