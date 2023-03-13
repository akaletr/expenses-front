import {useState} from "react";
import axios from "axios";
import styles from "./Category.module.css"

const URL = "http://localhost:8080/v1"

const Category = (props) => {
    const [sum, setSum] = useState(0)

    async function putEvent() {
        let data = {sum: Number(sum), description: props.event?.title, category_id: props.event?.ID}
        let res = await axios.put(URL, data).then(() => setSum(0))
    }

    const changeSum = (event) => {
        setSum(event.target.value)
    }

    return <div className={styles.wrapper}>
        <h4 className={styles.field}>{props.event.title}</h4>
        <h6 className={styles.field}>{props.event.description}</h6>
        <input type="number" value={sum} className={styles.input} onChange={(e) => {
            changeSum(e)
        }}/>
        <div className={styles.button} onClick={() => {
            putEvent()
        }}>Add
        </div>
    </div>

}

export default Category;