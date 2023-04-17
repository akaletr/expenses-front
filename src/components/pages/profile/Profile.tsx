import styles from "./Profile.module.css"
import {Person} from "./person/Person";
import {PersonWallet} from "./personWallet/PersonWallet";

export function Profile() {
    return <div className={styles.wrapper}>
        <Person/>
        <PersonWallet/>
    </div>
}