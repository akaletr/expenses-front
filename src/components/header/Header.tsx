import {useGetUserQuery} from "../../store/expenses/expenses.api";
import {useAppSelector} from "../../hooks/redux";
import {useActions} from "../../hooks/action";
import {useEffect} from "react";

export function Header() {
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

    // setUser(data!.result)

    return <>
        {isLoading && <>
            <span>Loading...</span>
        </>}
        {data && <>
            <span>{data.result.first_name}</span>
            <span>{data.result.last_name}</span>
        </>}
    </>
}