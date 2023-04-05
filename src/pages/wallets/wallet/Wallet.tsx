export function Wallet(props:any) {
    console.log(props)
    return <h2>
        {props.name} {props.sum}
    </h2>
}