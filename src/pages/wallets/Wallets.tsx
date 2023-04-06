import {Wallet} from "./wallet/Wallet";
import {useAppSelector} from "../../hooks/redux";

export function Wallets() {
    const wallets = useAppSelector(state => state.expenses.subWallets)
    return <div>
        {wallets?.map((el) => <Wallet key={el.ID} {...el} />)}
    </div>
}