import {useState} from "react";
import axios from "axios";
import styles from "./Event.module.css"

const URL = "http://localhost:8080/category"

const Event = (props) => {
    const [count, setCount] = useState(0)
    const [event, setEvent] = useState("")
    const [desc, setDesc] = useState("")

    async function putEvent() {
        let res = await axios.put(URL, {title:event, description:desc})
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

        <span className={styles.field}>{props.event.description}</span>
        <span className={styles.field}> {props.event.sum}</span>
        {/*<button onClick={() => {*/}
        {/*    putEvent()*/}
        {/*    setCount(count + 1)*/}
        {/*}}*/}
        {/*>Add</button>*/}
    </div>

}

export default Event;