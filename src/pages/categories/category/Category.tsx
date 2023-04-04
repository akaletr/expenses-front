import {ICategory} from "../../../models/category";
import s from "./Category.module.css"
import {useState} from "react";


export function Category(c: ICategory) {
    const [ready, setReady] = useState(true)
    const [input, setInput] = useState("")
    const [btn, setBtn] = useState(false)

    const onCardClick = () => {
        setReady(false)
    }

    const onButtonClick = (e: any) => {
        const query = {
            id: "header",
            method: "event.create",
            params: {
                category_id: 2,
                description: c.title,
                sum: Number(input)
            }
        }

        fetch("http://localhost:8080/v1", {
            method: "POST",
            body: JSON.stringify(query)
        }).then(res => res.json()).then(res => console.log(res))
        setBtn(true)
        setInput("")
        setReady(true)
    }

    const onInput = (e: { target: any; }) => {
        console.log(e)

        let num = parseInt(e.target.value)
        if (Number.isNaN(num) && e.target.value == "") {
            console.log(num)
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