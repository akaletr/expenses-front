import {useGetUserQuery, useLazyCategoryQuery} from "../store/expenses/expenses.api";
import {IUserParams, Request} from "../models/models";
import {useEffect, useState} from "react";
import {configureStore} from "@reduxjs/toolkit";
import {useActions} from "../hooks/action";
import {useAppSelector} from "../hooks/redux";

export function HomePage() {
    const [fetchCategory, {data: category}] = useLazyCategoryQuery()

    const {user} = useAppSelector(state => state.expenses)
    const {setTitle} = useActions()

    useEffect(() => {
        console.log(user)
    }, [])

    const clickHandler = (user_id: number) => {
        setTitle("Hello")
        const query: Request<IUserParams> = {
            id: "1234",
            method: "category.get",
            params: {
                id: 4
            }
        }

        fetchCategory(query)
        console.log(category)
    }



    return <div>
        {user && <>
            <span>{user.first_name}</span>
            <span>{user.last_name}</span>
            <span>{user.wallet_id}</span>
            <span>{user.email}</span>
            <button onClick={() => clickHandler(user.ID)}>Посмотреть</button>
        </>}
        {category && <>
            <span>{category.result.title}</span>
        </>}
    </div>
}