import {useEffect, useState} from "react";
import axios from "axios";
import styles from "./CategoryList.module.css"
import Category from "./Category/Category";

const url = "http://localhost:8080/categories"

const CategoryList = (props) => {
    async function getCategories() {
        setLoading(true)
        let res = await axios.get(url)
        setEvents(res.data)
        setLoading(false)
    }

    const [events, setEvents] = useState([])
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        getCategories()
    }, [])

    return <div className={styles.wrapper}>
        {loading && <p>Loading...</p>}
        {events.map(event => <Category event = {event}/>)}
    </div>
}

export default CategoryList