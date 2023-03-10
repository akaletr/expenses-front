import {Link} from "react-router-dom";
import styles from "./Navigation.module.css"

const Navigation = () => {
    return <div className={styles.wrapper}>
        <Link className={styles.item} to="/categories">Categories</Link>
        <Link className={styles.item} to="/events">Events</Link>
        <Link className={styles.item} to="/about">About</Link>
    </div>
}

export default Navigation