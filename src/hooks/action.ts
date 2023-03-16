import {useDispatch} from "react-redux";
import {bindActionCreators} from "@reduxjs/toolkit";
import {expensesActions} from "../store/expenses/expenses.slice";

const actions = {
    ...expensesActions
}

export const useActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(actions, dispatch)
}