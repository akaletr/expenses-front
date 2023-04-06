import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {Response, Request, IUserParams} from "../../models/models";
import {IUser} from "../../models/user";
import {ICategory} from "../../models/category";
import {IEvent} from "../../models/event";
import {IWallet} from "../../models/wallet";
import {ISubWallet} from "../../models/subwallet";

export const expensesApi = createApi({
    reducerPath: "expenses/api",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:8080"
    }),
    endpoints: build => ({
        auth: build.query<any, any>({
            query: (search) => ({
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
                url: "v1",
                method:"POST",
                body: search
            })
        }),
        wallet: build.query<Response<IWallet>, Request<any>>({
            query: (search) => ({
                url: "v1",
                method:"POST",
                body: search
            })
        }),
        subWallets: build.query<Response<ISubWallet[]>, Request<any>>({
            query: (search) => ({
                url: "v1",
                method:"POST",
                body: search
            })
        }),
        action: build.query<Response<any>, Request<any>>({
            query: (search) => ({
                url: "v1",
                method:"POST",
                body: search
            })
        }),
    })
})

export const {
    useSubWalletsQuery,
    useWalletQuery,
    useLazySubWalletsQuery,
    useLazyWalletQuery,
    useEventQuery,
    useLazyEventQuery,
    useGetUserQuery,
    useLazyCategoryQuery,
    useCategoryQuery,
    useAuthQuery,
    useActionQuery,
    useLazyActionQuery,
} = expensesApi