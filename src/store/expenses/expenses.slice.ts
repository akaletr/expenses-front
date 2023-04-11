import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IUser} from "../../models/user";
import {IWallet} from "../../models/wallet";
import {ISubWallet} from "../../models/subwallet";
import {IState} from "../../models/state";

interface ExpensesState {
    auth: boolean
    title: string
    user: IUser
    wallet: IWallet
    subWallets: ISubWallet[]
    state: IState
}

const initialState: ExpensesState = {
    auth: false,
    title: "",
    user: {
        ID: 0,
        email: "",
        first_name: "",
        last_name: "",
    },
    wallet: {
        ID: 0,
        user_id: 0,
        sum: 0,
        name: "",
        currency: 0,
    },
    subWallets: [],
    state: {
        activeWallet: 1
    }
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
        setWallet(state, action:PayloadAction<IWallet>) {
            state.wallet = action.payload
        },
        setSubWallets(state, action:PayloadAction<ISubWallet[]>) {
            state.subWallets = action.payload
        },
        setState(state, action:PayloadAction<IState>) {
            state.state = action.payload
        },
    }
})

export const expensesActions = expensesSlice.actions
export const expensesReducer = expensesSlice.reducer