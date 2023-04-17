import styles from "./Person.module.css"
import {useAppSelector} from "../../../../hooks/redux";

export function Person() {
    const user = useAppSelector(state => state.expenses.user)

    return <div className={styles.wrapper}>
        <div> {user.first_name}</div>
        <div> {user.last_name}</div>
        <div> {user.email}</div>
    </div>
}