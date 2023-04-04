import {useAppSelector} from "../hooks/redux";

export function Profile() {
    const store = useAppSelector(state => state.expenses)

    return <div>
        <div> {store.user?.first_name}</div>
        <div> {store.user?.last_name}</div>
        <div> {store.user?.email}</div>
        <div> {store.user?.ID}</div>
    </div>
}