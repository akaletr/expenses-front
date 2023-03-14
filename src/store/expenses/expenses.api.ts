import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const expensesApi = createApi({
    reducerPath: "expenses/api",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:8080"
    }),
    endpoints: build => ({
        getUser: build.query<any, any>({
            query: (search) => ({
                url: "v1",
                method:"POST",
                body: {
                    id:"23",
                    method:"user.get",
                    params:{
                        id:search
                    }
                }
            })
        })
    })
})

export const {useGetUserQuery} = expensesApi