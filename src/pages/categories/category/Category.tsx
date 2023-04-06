import {ICategory} from "../../../models/category";
import s from "./Category.module.css"
import {useState} from "react";
import {useLazyActionQuery, useLazySubWalletsQuery, useLazyWalletQuery} from "../../../store/expenses/expenses.api";
import {useActions} from "../../../hooks/action";


export function Category(c: ICategory) {
    const [ready, setReady] = useState(true)
    const [input, setInput] = useState("")

    const [fetchSubWallets, {data: subWallets}] = useLazySubWalletsQuery()
    const [fetchWallet, {data: wallet}] = useLazyWalletQuery()
    const [fetchAction] = useLazyActionQuery()

    const {setWallet} = useActions()
    const {setSubWallets} = useActions()

    const onCardClick = () => {
        setReady(false)
    }

    const onButtonClick = () => {
        const eventQuery = {
            id: "header",
            method: "action.event",
            params: {
                category_id: c.ID,
                sub_wallet_id: 2,
                description: c.title,
                sum: Number(input)
            }
        }
        fetchAction(eventQuery)

        let walletQuery = {
            id: "wallet",
            method: "wallet.get",
            params: {}
        }
        fetchWallet(walletQuery)


        const subWalletQuery = {
            id: "wallet",
            method: "subwallet.getmany",
            params: {
                wallet_id: 1
            }
        }
        fetchSubWallets(subWalletQuery)

        setSubWallets(subWallets?.result!)
        setWallet(wallet?.result!)

        setInput("")
    }

    const onInput = (e: { target: any; }) => {
        let num = parseInt(e.target.value)
        if (Number.isNaN(num) && e.target.value == "") {
            return
        }

        setInput(e.target.value)
    }

    if (c.ID == 0) {
        return <div className={s.wrapper}>
            <div className={s.title}>{"Добавить"}</div>
            <div className={s.description}>{c.description}</div>
        </div>
    }

    return <div className={s.wrapper} onClick={onCardClick}>
        <div className={s.title}>{c.title}</div>
        {ready && <>
            <div className={s.description}>{c.description}</div>
        </>}
        {!ready && <>
            <input pattern="\d*" className={s.input} type="number" value={input} onChange={onInput}/>
            <button className={s.button} onClick={onButtonClick}>Добавить</button>
        </>}
    </div>
}