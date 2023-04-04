import s from "./Header.module.css"
import {Navbar} from "./navbar/Navbar";
import {Info} from "./info/Info";

export function Header() {
    return <div className={s.wrapper}>
        <Navbar/>
        <Info/>
    </div>
}