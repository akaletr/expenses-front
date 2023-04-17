import styles from "./PersonWallet.module.css"
import {useAppSelector} from "../../../../hooks/redux";

export function PersonWallet() {
    const wallet = useAppSelector(state => state.expenses.wallet)

    return <div className={styles.wrapper}>
        <div> {wallet.name}</div>
        <div> {wallet.sum}</div>
    </div>
}