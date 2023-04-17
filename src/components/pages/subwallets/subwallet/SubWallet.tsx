import styles from "./SubWallet.module.css"
import {useAppSelector} from "../../../../hooks/redux";
import {useActions} from "../../../../hooks/action";
import {IState} from "../../../../models/state";

export function SubWallet(el: any) {
    const state = useAppSelector(state => state.expenses.state)
    const {setState} = useActions()
    const onSWClick = () => {
        let st: IState = {
            activeWallet: el.sw.ID
        }

        setState(st)
    }

    if (state.activeWallet === el.sw.ID) {
        return <>
            {el.sw && <div className={`${styles.wrapper} ${styles.active}`} onClick={onSWClick}>
                <div className={styles.name}>
                    {el.sw.name}
                </div>
                <div className={styles.sum}>
                    {el.sw.sum}
                </div>
            </div>}
        </>
    }

    return <>
        {el.sw && <div className={styles.wrapper} onClick={onSWClick}>
            <div className={styles.name}>
                {el.sw.name}
            </div>
            <div className={styles.sum}>
                {el.sw.sum}
            </div>
        </div>}
    </>
}