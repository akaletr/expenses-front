import {Link} from "react-router-dom";
import {useAppSelector} from "../../../hooks/redux";
import s from "./Navbar.module.css"

export function Navbar() {
    const test = useAppSelector(state => state.expenses)
    return <div className={s.wrapper}>
        <span>{test.title}</span>
        <Link className={s.link} to={"/profile"}>Профиль</Link>
        <Link className={s.link} to={"/categories"}>Категории</Link>
        <Link className={s.link} to={"/home"}>Home page</Link>
    </div>
}