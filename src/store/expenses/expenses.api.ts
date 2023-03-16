import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {Response, Request, IUserParams} from "../../models/models";
import {IUser} from "../../models/user";

export const expensesApi = createApi({
    reducerPath: "expenses/api",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:8080"
    }),
    endpoints: build => ({
        getUser: build.query<Response<IUser>, Request<IUserParams>>({
            query: (search) => ({
                url: "v1",
                method:"POST",
                body: search
            })
        }),
        category: build.query<Response<any>, Request<any>>({
            query: (search) => ({
                url: "v1",
                method:"POST",
                body: search
            })
        }),
    })
})

export const {useGetUserQuery, useLazyCategoryQuery} = expensesApi