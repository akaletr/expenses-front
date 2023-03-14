import {configureStore} from "@reduxjs/toolkit";
import {expensesApi} from "./expenses/expenses.api";

export const store = configureStore({
    reducer: {
        [expensesApi.reducerPath]: expensesApi.reducer
    }
})