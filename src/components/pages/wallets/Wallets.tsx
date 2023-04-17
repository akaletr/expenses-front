import {Wallet} from "./wallet/Wallet";
import {useAppSelector} from "../../../hooks/redux";
import styles from "./Wallets.module.css"

export function Wallets() {
    const wallets = useAppSelector(state => state.expenses.subWallets)
    return <div className={styles.wrapper}>
        {wallets?.map((el) => <Wallet key={el.ID} {...el} />)}
    </div>
}