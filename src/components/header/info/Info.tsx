import {
    useGetUserQuery,
    useLazyCategoryQuery,
    useLazyWalletsQuery,
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
    const [fetchWallet, {data: wallet}] = useLazyWalletsQuery()



    // const {data: wallet} = useWalletQuery(walletQuery)
    const {setUser} = useActions()
    const {setWallet} = useActions()

    useEffect(() => {
        setUser(user?.result!)

        const walletQuery = {
            id: "wallet",
            method: "wallet.getmany",
            params: {
                ID: user?.result.wallet_id
            }
        }
        fetchWallet(walletQuery)
        setWallet(wallet?.result!)
    }, [user, wallet])

    return <div className={s.wrapper}>
        {isLoading && <>
            <div className={s.field}>Loading...</div>
        </>}
        {user && <>
            <div className={s.field}>{user.result.first_name}</div>
            <div className={s.field}>{user.result.last_name}</div>
        </>}
        {wallet && <>
            <div className={s.field}>({wallet.result[0].sum})</div>
        </>}
    </div>
}