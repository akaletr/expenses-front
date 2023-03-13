import './App.module.css';
import Header from "./Components/Header/Header";
import Sidebar from "./Components/Sidebar/Sidebar";
import styles from "./App.module.css"
import Content from "./Components/Content/Content";
import {useEffect, useState} from "react";
import axios from "axios";
import Login from "./Components/Login/Login";

const URL = "http://localhost:8080/login"

function App() {
    const [isAuth, setIsAuth] = useState(true)

    const checkAuth = () => {
        // let res = axios.post(URL).then(() => setIsAuth(false))
    }

    useEffect(checkAuth, [])

    return (
        <div className={styles.wrapper}>

            {isAuth ? <>
                <div className={styles.header}>
                    <Header/>
                </div>
                <div className={styles.nav}>
                    <Sidebar/>
                </div>
                <div className={styles.page}>
                    <Content/>
                </div>
            </>:<>
                <Login/>

            </>}



        </div>
    );
}

export default App;
