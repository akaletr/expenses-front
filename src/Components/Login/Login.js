import {useState} from "react";
import axios from "axios";

const URL = "http://localhost:8080/login"

const Login = () => {
    const [email, setEmail] = useState("")
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")

    const btnOnClick = () => {
        let user = {
            email:email,
            first_name: firstName,
            last_name: lastName,
            wallet_id: 1
        }
        let res = axios.post(URL, user).then((e) => console.log(e))
    }

    return <div>
        <input placeholder={"email"} value={email} type="email" onChange={(e) => {
            setEmail(e.target.value)
        }
        }/>
        <input placeholder={"email"} value={firstName} type="text" onChange={(e) => {
            setFirstName(e.target.value)
        }
        }/>
        <input placeholder={"email"} value={lastName} type="text" onChange={(e) => {
            setLastName(e.target.value)
        }
        }/>
        <button onClick={btnOnClick}>Login</button>
    </div>
}

export default Login