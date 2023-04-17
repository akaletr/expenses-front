import {useLazyActionQuery} from "../../../store/expenses/expenses.api";
import {useEffect} from "react";
import {useActions} from "../../../hooks/action";
import {Event} from "./event/Event";

interface Events {
    created_at: string
    title: string
    description: string
    sum: number
    sub_wallet: string
}
export function Events() {
    const query = {
        id: "234",
        method: "action.events",
        params: {}
    }

    const [fetchAction, {data: events}] = useLazyActionQuery()

    const {setEvents} = useActions()

    // const {data: events} = useActionQuery(query)
    useEffect(() => {
        fetchAction(query)
        setEvents(events)
    }, [])

    return <div>
        {events?.result.map((el: Events) => <Event id={el.created_at} {...el} />)}
    </div>
}