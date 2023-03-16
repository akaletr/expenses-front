import {configureStore} from "@reduxjs/toolkit";
import {expensesApi} from "./expenses/expenses.api";
import {expensesReducer} from "./expenses/expenses.slice";
import {setupListeners} from "@reduxjs/toolkit/query";

export const store = configureStore({
    reducer: {
        [expensesApi.reducerPath]: expensesApi.reducer,
        expenses: expensesReducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(expensesApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>