import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IUser} from "../../models/user";
import {IUserParams} from "../../models/models";
import {IWallet} from "../../models/wallet";

interface ExpensesState {
    auth: boolean
    title: string
    user: IUser
    wallet: IWallet[]
}

const initialState: ExpensesState = {
    auth: false,
    title: "",
    user: {
        ID: 0,
        email: "",
        first_name: "",
        last_name: "",
        wallet_id: 0,
    },
    wallet: []
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
        },
        setWallet(state, action:PayloadAction<IWallet[]>) {
            state.wallet = action.payload
        },
    }
})

export const expensesActions = expensesSlice.actions
export const expensesReducer = expensesSlice.reducer