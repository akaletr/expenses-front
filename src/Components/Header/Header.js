import styles from "./Header.module.css"
import {useEffect, useState} from "react";
import axios from "axios";

const URL = "http://localhost:8080/v1"

const Header = () => {
    const [user, setUser] = useState({
        first_name:"",
        email:""
    })

    const [wallet, setWallet] = useState({
        sum:"",
    })

    const getUser = async () => {
        const dataUser = {
            id:"123",
            method:"user.get",
            params:{}
        }



        let res = await axios.post(URL, dataUser).then(res => res)
        setUser(res.data.result)

        const dataWallet = {
            id:"123",
            method:"wallet.get",
            params:{
                id:user.wallet_id
            }
        }
        let wallet = await axios.post(URL, dataWallet).then(res => res)
        console.log(wallet)
        setWallet(wallet.data.result)
    }

    useEffect(() => {
      getUser().then(() => {
          console.log(user)
      })
    }, [])
    return <div className={styles.wrapper}>
        <span>{user.first_name}</span>
        <span> </span>
        <span>{user.last_name}</span>
        <span> </span>
        <span>{wallet.sum}</span>
    </div>;
}

export default Header;