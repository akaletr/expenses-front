import {useCategoryQuery} from "../../../store/expenses/expenses.api";
import {Category} from "./category/Category";
import s from "./Categories.module.css"
import {SubWallets} from "../subwallets/SubWallets";

export function Categories() {
    const query = {
        id: "234",
        method: "category.getmany",
        params: {}
    }
    const {data: categories} = useCategoryQuery(query)

    return <>
        <div className={s.wrapper}>
            <SubWallets/>
        </div>
        <div  className={s.wrapper}>
            {categories?.result.map((el) => <Category key={el.ID} {...el} />)}
            <Category type={""} ID={0} title={""} description={""}/>
        </div>
    </>
}