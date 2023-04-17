import styles from "./Event.module.css"

export function Event(event:any) {
    console.log(event)
    return <div className={styles.wrapper}>
        <span>{event.title} </span>
        <span>{event.description} </span>
        <span>{event.sum}</span>
    </div>
}