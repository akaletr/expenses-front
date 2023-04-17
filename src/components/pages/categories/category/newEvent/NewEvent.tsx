import styles from "./NewEvent.module.css"
import {KeyBoard} from "../../../../common/keyBoard/KeyBoard";
import {useEffect, useState} from "react";
import {useActions} from "../../../../../hooks/action";
import {useAppSelector} from "../../../../../hooks/redux";
import {useLazyActionQuery} from "../../../../../store/expenses/expenses.api";

export function NewEvent(props: any) {
    const [sum, setSum] = useState("0")

    const onClose = (e: any) => {
        e.stopPropagation()
        props.close()
    }


    const [fetchAction] = useLazyActionQuery()
    const [fetchActionSubWallets, {data: fetchSubWallets}] = useLazyActionQuery()

    const subWallets = useAppSelector(state => state.expenses.subWallets)
    const state = useAppSelector(state => state.expenses.state)

    const {setSubWallets} = useActions()
    const onClose1 = (e: any) => {
        e.stopPropagation()
    }

    useEffect(() => {

    }, [])

    const onBtnClick = () => {
        console.log(subWallets)
        const eventQuery = {
            id: "header",
            method: "action.event",
            params: {
                category_id: props.cID,
                sub_wallet_id: state.activeWallet,
                description: props.title,
                sum: Number(sum)
            }
        }
        fetchAction(eventQuery)

        const subWalletQuery = {
            id: "wallet",
            method: "subwallet.getmany",
            params: {
                wallet_id: 1
            }
        }

        fetchActionSubWallets(subWalletQuery).then((e) => {
            setSubWallets(e.data?.result!)
        })
        props.close()
    }

    return <div className={styles.wrapper} onClick={onClose}>
        <div className={styles.content} onClick={onClose1}>
            <div className={styles.info}>
                <div className={styles.subWallet}>
                    <div>{subWallets.filter(el => el.ID == state.activeWallet)[0].name}</div>
                    <div>
                        <span>{subWallets.filter(el => el.ID == state.activeWallet)[0].sum}  </span>
                        <span
                            className={styles.newSubWalletSum}>({subWallets.filter(el => el.ID == state.activeWallet)[0].sum - Number(sum)})</span>

                    </div>
                </div>

                <div>
                    <div>-----{">"}</div>
                    <div className={styles.sum}>{sum}</div>
                </div>
                <div className={styles.subWallet}>{props.title}</div>
            </div>
            <div className={styles.desc}>
                desc
            </div>
            <div className={styles.btn} onClick={onBtnClick}>
                Button
            </div>
            <KeyBoard sum={sum} total={subWallets.filter(el => el.ID == state.activeWallet)[0].sum} setSum={setSum}/>
        </div>
    </div>
}