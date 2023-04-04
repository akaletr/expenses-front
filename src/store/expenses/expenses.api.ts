import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {Response, Request, IUserParams} from "../../models/models";
import {IUser} from "../../models/user";
import {ICategory} from "../../models/category";
import {IEvent} from "../../models/event";

export const expensesApi = createApi({
    reducerPath: "expenses/api",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:8080"
    }),
    endpoints: build => ({
        auth: build.query<any, any>({
            query: (search) => ({
                mode: 'no-cors',
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Content-Type': 'application/json',
                },
                withCredentials: true,
                credentials: 'same-origin',
                url: "v1/auth",
                method:"POST",
                body: search
            })
        }),
        getUser: build.query<Response<IUser>, Request<IUserParams>>({
            query: (search) => ({
                url: "v1",
                method:"POST",
                body: search
            })
        }),
        event: build.query<Response<IEvent>, Request<any>>({
            query: (search) => ({
                url: "v1",
                method:"POST",
                body: search
            })
        }),
        category: build.query<Response<ICategory[]>, Request<any>>({
            query: (search) => ({
                mode: 'no-cors',
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Content-Type': 'application/json',
                },
                withCredentials: true,
                credentials: 'same-origin',
                url: "v1",
                method:"POST",
                body: search
            })
        }),
    })
})

export const {
    useEventQuery,
    useLazyEventQuery,
    useGetUserQuery,
    useLazyCategoryQuery,
    useCategoryQuery,
    useAuthQuery,
} = expensesApi