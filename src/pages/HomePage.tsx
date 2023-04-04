import {useGetUserQuery, useLazyCategoryQuery} from "../store/expenses/expenses.api";
import {IUserParams, Request} from "../models/models";
import {useEffect, useState} from "react";
import {configureStore} from "@reduxjs/toolkit";
import {useActions} from "../hooks/action";
import {useAppSelector} from "../hooks/redux";
import s from "./HomePage.module.css"

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

    </div>
}