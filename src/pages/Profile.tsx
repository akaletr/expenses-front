import {useAppSelector} from "../hooks/redux";

export function Profile() {
    const user = useAppSelector(state => state.expenses.user)
    const wallet = useAppSelector(state => state.expenses.wallet)

    return <div>
        <div> {user?.first_name}</div>
        <div> {user?.last_name}</div>
        <div> {user?.email}</div>
        <div> {user?.ID}</div>
        <h2>Sum</h2>
        <div> {wallet[0].name}</div>
        <div> {wallet[0].sum}</div>
    </div>
}