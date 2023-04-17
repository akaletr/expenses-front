import styles from "./Wallet.module.css"

export function Wallet(props:any) {
    return <div className={styles.wrapper}>
        {props.name} {props.sum}
    </div>
}