import styles from "./Event.module.css"

const URL = "http://localhost:8080/category"

const Event = (props) => {
    return <div className={styles.wrapper}>
        <span className={styles.field}>{props.event.description}</span>
        <span className={styles.field}> {props.event.sum}</span>
    </div>
}

export default Event;