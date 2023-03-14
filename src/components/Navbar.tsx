import {Link} from "react-router-dom";

export function Navbar() {
    return <nav>
        <Link to={"/profile"}>Profile</Link>
        <Link to={"/"}>Home page</Link>
    </nav>
}