import {
    useGetUserQuery,
    useLazyCategoryQuery, useLazySubWalletsQuery,
    useLazyWalletQuery,
    useWalletQuery
} from "../../../store/expenses/expenses.api";
import {useActions} from "../../../hooks/action";
import {useEffect} from "react";

import s from "./Info.module.css"

export function Info() {
    const userQuery = {
        id: "user",
        method: "user.get",
        params: {}
    }
    const {isLoading, data: user} = useGetUserQuery(userQuery)
    const [fetchWallet, {data: wallet}] = useLazyWalletQuery()
    const [fetchSubWallets, {data: subWallets}] = useLazySubWalletsQuery()



    // const {data: wallet} = useWalletQuery(walletQuery)
    const {setUser} = useActions()
    const {setWallet} = useActions()
    const {setSubWallets} = useActions()

    useEffect(() => {
        setUser(user?.result!)

        const walletQuery = {
            id: "wallet",
            method: "wallet.get",
            params: {}
        }
        const subWalletsQuery = {
            id: "subwallets",
            method: "subwallet.getmany",
            params: {
                wallet_id: 1
            }
        }
        fetchWallet(walletQuery)
        fetchSubWallets(subWalletsQuery)

        setWallet(wallet?.result!)
        setSubWallets(subWallets?.result!)
    }, [user, wallet, subWallets])

    return <div className={s.wrapper}>
        {isLoading && <>
            <div className={s.field}>Loading...</div>
        </>}
        {user && <>
            <div className={s.field}>{user.result.first_name}</div>
            <div className={s.field}>{user.result.last_name}</div>
        </>}
        {wallet && <>
            <div className={s.field}>({wallet.result.sum})</div>
        </>}
    </div>
}