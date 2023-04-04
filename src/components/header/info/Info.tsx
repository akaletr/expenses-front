import {useGetUserQuery} from "../../../store/expenses/expenses.api";
import {useActions} from "../../../hooks/action";
import {useEffect} from "react";

import s from "./Info.module.css"

export function Info() {

    const query = {
        id: "header",
        method: "user.get",
        params: {}
    }

    const {isLoading, data} = useGetUserQuery(query)
    const {setUser} = useActions()

    useEffect(() => {
        setUser(data?.result!)
    }, [data])


    return <div className={s.wrapper}>
        {isLoading && <>
            <div className={s.field}>Loading...</div>
        </>}
        {data && <>
            <div className={s.field}>{data.result.first_name}</div>
            <div className={s.field}>{data.result.last_name}</div>
        </>}
    </div>
}