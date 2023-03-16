import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IUser} from "../../models/user";
import {IUserParams} from "../../models/models";

interface ExpensesState {
    title: string
    user: IUser
}

const initialState: ExpensesState = {
    title: "",
    user: {
        ID: 0,
        email: "",
        first_name: "",
        last_name: "",
        wallet_id: 0,
    },
}

export const expensesSlice = createSlice({
    name: "expenses",
    initialState,
    reducers: {
        setTitle(state, action:PayloadAction<string>) {
            state.title = action.payload
        },
        setUser(state, action:PayloadAction<IUser>) {
            state.user = action.payload
        }
    }
})

export const expensesActions = expensesSlice.actions
export const expensesReducer = expensesSlice.reducer