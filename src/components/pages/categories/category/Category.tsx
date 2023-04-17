import {ICategory} from "../../../../models/category";
import styles from "./Category.module.css"
import {useState} from "react";
import {NewEvent} from "./newEvent/NewEvent";


export function Category(c: ICategory) {
    const [ready, setReady] = useState(true)

    const onCardClick = () => {
        setReady(false)
    }

    let wrapper = `${styles.wrapper}`
    if (c.type == "income") {
        wrapper = `${styles.wrapper} ${styles.income}`
    }

    const close = (e: any) => {
        setReady(true)
    }

    if (c.ID == 0) {
        return <div className={styles.wrapper}>
            <div className={styles.title}>{"Добавить"}</div>
            <div className={styles.description}>{c.description}</div>
        </div>
    }

    return <div className={wrapper} onClick={onCardClick}>
        {!ready && <NewEvent close={close} title={c.title}  cID={c.ID}/>}
        <div className={styles.title}>{c.title}</div>
        <div className={styles.description}>{c.description}</div>
    </div>
}