import {useState} from "react";
import axios from "axios";
import styles from "./Category.module.css"

const URL = "http://localhost:8080/event"

const Category = (props) => {
    const [event, setEvent] = useState("")
    const [desc, setDesc] = useState("")

    async function putEvent() {
        let res = await axios.put(URL, {sum: 1000, description: "desc", categoryid: 1})
    }

    const changeE = (event) => {
        setEvent(event.target.value)
    }

    const changeD = (event) => {
        setDesc(event.target.value)
    }

    return <div className={styles.wrapper}>
        {/*<input className={"my-2 mx-2 py-2 px-4 border"} type="text" value={event} onChange={*/}
        {/*    (e) => changeE(e)*/}
        {/*}/>*/}
        {/*<input className={"my-2 mx-2 py-2 px-4 border"} type="text" value={desc} onChange={*/}
        {/*    (e) => changeD(e)*/}
        {/*}/>*/}

        <span className={styles.field}>{props.event.Title}</span>
        <span className={styles.field}>{props.event.Description}</span>
        <button className={styles.field} onClick={() => {
            putEvent()
        }}>
            Add
        </button>

    </div>

}

export default Category;