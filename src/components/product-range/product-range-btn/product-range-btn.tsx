import { TProductRangeBtn } from "../../../types/product-range"
import s from "./product-range-btn.module.scss"

export default function ProductRangeBtn({ onClick, isInCart }: TProductRangeBtn) {
   return (
      <button type="button" className={isInCart ? `${s.btn} ${s.btn_active}` : s.btn} onClick={onClick}>
         {isInCart ? "Убрать" : "В корзину"}
      </button>
   )
}
