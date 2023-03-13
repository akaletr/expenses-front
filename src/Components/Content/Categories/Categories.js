import {useEffect, useState} from "react";
import axios from "axios";
import styles from "./Categories.module.css"
import Category from "./Category/Category";
import NewCategory from "./Category/NewCategory";

const url = "http://localhost:8080/v1"

const Categories = () => {
    async function getCategories() {
        let data = {
            id:"1",
            method:"category.getmany",
            params:{}
        }

        setLoading(true)
        let res = await axios.post(url, data).then((res) => {
            console.log(res)
            setEvents(res.data.result)
        })
        setLoading(false)
    }

    const [events, setEvents] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getCategories().then(() => {
            console.log(events)})
    }, [])

    return <div className={styles.wrapper}>
        {loading && <div className="d-flex justify-content-center">

            <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>}
        {events.map(event => <Category event = {event}/>)}
        {!loading && <NewCategory />}

    </div>
}

export default Categories


