export interface Request<T> {
    id: string
    method: string
    params: T
}

export interface Response<T> {
    id: string
    error: string
    result: T
}

export interface IUserParams {

}

export interface IUserResult {
    ID: number
    first_name: string
    last_name: string
    wallet_id: number
    email: string
}