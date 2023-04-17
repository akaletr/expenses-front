import {Route, Routes} from "react-router-dom";
import {} from "./App.module.css"
import {Profile} from "./components/pages/profile/Profile";
import {Categories} from "./components/pages/categories/Categories";
import {Header} from "./components/header/Header";
import {Wallets} from "./components/pages/wallets/Wallets";
import {Events} from "./components/pages/events/Events";
import {useEffect} from "react";
import {useActions} from "./hooks/action";
import {useActionQuery} from "./store/expenses/expenses.api";

function App() {
    const {setUser} = useActions()
    const {setWallet} = useActions()
    const {setSubWallets} = useActions()

    const userQuery = {
        id: "user",
        method: "user.get",
        params: {}
    }

    const {data: user} = useActionQuery(userQuery)

    const walletQuery = {
        id: "wallet",
        method: "wallet.get",
        params: {}
    }
    const {data: wallet} = useActionQuery(walletQuery)

    const subWalletsQuery = {
        id: "subwallets",
        method: "subwallet.getmany",
        params: {
            wallet_id: 1
        }
    }
    const {data: subWallets} = useActionQuery(subWalletsQuery)


    useEffect(() => {
        setUser(user?.result)
        setWallet(wallet?.result)
        setSubWallets(subWallets?.result)
    }, [user, wallet, subWallets])

    return <>
        <Header/>
        <Routes>
            <Route path={"/profile"} element={<Profile/>}/>
            <Route path={"/wallets"} element={<Wallets/>}/>
            <Route path={"/categories"} element={<Categories/>}/>
            <Route path={"/events"} element={<Events/>}/>
        </Routes>
    </>
}

export default App;
