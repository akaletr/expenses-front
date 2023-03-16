import {Link} from "react-router-dom";
import {useActions} from "../hooks/action";
import {useAppSelector} from "../hooks/redux";

export function Navbar() {
    const test = useAppSelector(state => state.expenses)
    console.log(test.title)
    return <nav>
        <span>{test.title}</span>
        <Link to={"/profile"}>Profile</Link>
        <Link to={"/"}>Home page</Link>
    </nav>
}