import {useAppSelector} from "../../hooks/redux";
import {SubWallet} from "./subwallet/SubWallet";
import styles from "./SubWallets.module.css"

export function SubWallets() {
    const subWallets = useAppSelector(state => state.expenses.subWallets)
    return <div className={styles.wrapper}>
        {subWallets && subWallets.map(el => <SubWallet key={el.ID} sw={el}/>)}
    </div>
}