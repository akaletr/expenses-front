import {useGetUserQuery} from "../store/expenses/expenses.api";

export function HomePage() {
    const query = {
        id: 3
    }
    const {data} = useGetUserQuery(3)
    console.log(data)
    return <div>
        HomePage
    </div>
}