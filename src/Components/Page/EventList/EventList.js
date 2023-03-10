import Event from "./Event/Event";
import {useEffect, useState} from "react";
import axios from "axios";
import styles from "./EventList.module.css"

const url = "http://localhost:8080/events"

const EventList = (props) => {
    async function getEvents() {
        setLoading(true)
        let res = await axios.get(url)
        setEvents(res.data)
        setLoading(false)
    }

    const [events, setEvents] = useState([])
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        getEvents()
    }, [])

    return <div className={styles.wrapper}>
        {loading && <p>Loading...</p>}
        {events.map(event => <Event event = {event}/>)}
    </div>
}

export default EventList