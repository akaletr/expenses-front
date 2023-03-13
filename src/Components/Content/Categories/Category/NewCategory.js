import {useState} from "react";
import axios from "axios";
import styles from "./Category.module.css"

const URL = "http://localhost:8080/v1"

const NewCategory = (props) => {
    const [description, setDescription] = useState("")
    const [title, setTitle] = useState("")
    const [sum, setSum] = useState(0)

    async function putCategory() {
        let data = {
            id: "1",
            method: "category.create",
            params: {
                title: title,
                description: description,
                user_id:3
            }
        }
        console.log(data)
        // let res = await
        try {
            await axios.post(URL, data).then(res => console.log(res))
        } catch (e) {
            console.log(e)
        }
    }

    async function putSum() {
        let data = {sum: Number(sum), description: props.event.title, category_id: props.event.ID}
        let res = await axios.put(URL, data).then(() => setSum(0)).then(() => {
            setSum(0)
        })
    }

    const changeTitle = (event) => {
        setTitle(event.target.value)
    }
    const changeDescription = (event) => {
        setDescription(event.target.value)
    }

    const changeSum = (event) => {
        setSum(event.target.value)
    }

    return <div className={styles.wrapper}>
        <input type="text" placeholder={"Категория"} value={title} className={styles.field} onChange={
            (e) => {
                changeTitle(e)
            }
        }/>
        <input type="text" placeholder={"Описание"} value={description} className={styles.field} onChange={
            (e) => {
                changeDescription(e)
            }
        }/>
        <input type="number" value={sum} className={styles.field} onChange={
            (e) => {
                console.log(e.target.value)
                changeSum(e)
            }
        }/>
        <button className={[styles.field, styles.button].join(" ")} onClick={() => {
            putCategory()
        }}>
            Add
        </button>
    </div>

}

export default NewCategory;