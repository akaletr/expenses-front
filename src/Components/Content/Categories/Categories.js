import {useEffect, useState} from "react";
import axios from "axios";
import styles from "./Categories.module.css"
import Category from "./Category/Category";

const url = "http://localhost:8080/categories"

const Categories = () => {
    async function getCategories() {
        setLoading(true)
        let res = await axios.get(url)
        setEvents(res.data)
        setLoading(false)
    }

    const [events, setEvents] = useState([])
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        getCategories().then()
    }, [])

    return <div className={styles.wrapper}>
        {loading && <div className="d-flex justify-content-center">
            <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>}
        {events.map(event => <Category event = {event}/>)}
    </div>
}

export default Categories


