import s from "./cart-item.module.scss";
import closeIcon from "../../../images/cart/close.svg"
import { TCartItemProps } from "../../../types/cart";
import { useAppDispatch } from "../../../hooks";
import { decreaseItemAmount, increaseItemAmount, removeItemById } from "../../../services/cart";

export default function CartItem({ data }: TCartItemProps) {
   const dispatch = useAppDispatch();

   return (
      <li className={s.item}>
        <div className={s.img_container}>
          <img src={data.img} alt={data.name} />
        </div>
        <div className={s.body}>
          <div className={s.header}>
            <h3 className={s.name}>{data.name}</h3>
            <button type="button" className={s.close_btn} onClick={() => dispatch(removeItemById(data.id))}>
              <img src={closeIcon} alt="" />
            </button>
          </div>
          <div className={s.footer}>
            <div className={s.amount}>
              <button type="button" className={s.amount_btn} onClick={() => dispatch(decreaseItemAmount(data.id))}>-</button>
              <p className={s.amount_value}>{data.amount}</p>
              <button type="button" className={s.amount_btn} onClick={() => dispatch(increaseItemAmount(data.id))}>+</button>
            </div>
            <p className={s.basket__price}>{data.price * data.amount} ₽</p>
          </div>
        </div>
      </li>
   )
}
