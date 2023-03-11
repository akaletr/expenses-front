import {useState} from "react";
import axios from "axios";
import styles from "./Category.module.css"

const URL = "http://localhost:8080/event"

const Category = (props) => {
    const [event, setEvent] = useState("")
    const [sum, setSum] = useState(0)

    async function putEvent() {
        console.log("putEvent")
        let data = {sum: Number(sum), description: props.event.Title, category_id: props.event.ID}
        console.log(props.event)

        let res = await axios.put(URL, data)
    }

    const changeSum = (event) => {
        console.log("asdfasdfasdf")
        setSum(event.target.value)
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
        <input type="number" value={sum} className={styles.field} onChange={
            (e) => {
                console.log(e.target.value)
                changeSum(e)
            }
        }/>
        <button className={[styles.field, styles.button].join(" ")} onClick={() => {
            putEvent()
        }}>
            Add
        </button>
    </div>

}

export default Category;