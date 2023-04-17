import {Link} from "react-router-dom";
import s from "./Navbar.module.css"

export function Navbar() {
    return <div className={s.wrapper}>
        <Link className={s.link} to={"/profile"}>Профиль</Link>
        <Link className={s.link} to={"/wallets"}>Счета</Link>
        <Link className={s.link} to={"/categories"}>Категории</Link>
        <Link className={s.link} to={"/events"}>Траты</Link>
    </div>
}