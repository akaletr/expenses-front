import styles from "./KeyBoard.module.css"

export function KeyBoard(props: any) {
    const btnClick = (e: any) => {
        if (props.sum == "0") {
            props.setSum(e.target.innerHTML)
            return;
        }

        let newSum = props.sum + e.target.innerHTML
        if (Number(newSum) > props.total) {
            return
        }

        props.setSum(newSum)
    }

    const key = (e: any) => {
        if (e.key in ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]) {
            if (props.sum == "0") {
                props.setSum(e.key)
                return;
            }

            let newSum = props.sum + e.key
            if (Number(newSum) > props.total) {
                return
            }

            props.setSum(newSum)
        }
    }

    const clearBtn = () => {
        props.setSum("0")
    }

    const del = () => {
        if (props.sum.length == 1) {
            props.setSum("0")
            return
        }
        props.setSum(props.sum.substring(0, props.sum.length - 1))
    }

    window.addEventListener("keydown", key)

    return <div onKeyDown={key}>
        <div className={styles.wrapper}>
            <div className={styles.btn} onClick={btnClick}>1</div>
            <div className={styles.btn} onClick={btnClick}>2</div>
            <div className={styles.btn} onClick={btnClick}>3</div>
            <div className={styles.btn} onClick={btnClick}>4</div>
            <div className={styles.btn} onClick={btnClick}>5</div>
            <div className={styles.btn} onClick={btnClick}>6</div>
            <div className={styles.btn} onClick={btnClick}>7</div>
            <div className={styles.btn} onClick={btnClick}>8</div>
            <div className={styles.btn} onClick={btnClick}>9</div>
            <div className={styles.btn} onClick={del}>Del</div>
            <div className={styles.btn} onClick={btnClick}>0</div>
            <div className={styles.btn} onClick={clearBtn}>Clear</div>
        </div>
    </div>

}