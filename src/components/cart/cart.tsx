import { useAppDispatch, useAppSelector } from "../../hooks";
import s from "./cart.module.scss";
import crossIcon from "../../images/cart/cross__icon.svg"
import CartItem from "./cart-item/cart-item";
import { toggleCart } from "../../services/cart";

export default function Cart() {
   const dispatch = useAppDispatch();
   const { isOpen, totalPrice, cartArr } = useAppSelector(state => state.root.CartSlice);

   return (
      <div className={isOpen ? `${s.basket__container} ${s.basket__container_active}` : s.basket__container}>
         <div className={s.basket__popup}>
            <button type="button" className={s.basket__hide_btn} onClick={() => dispatch(toggleCart())}>
               <img src={crossIcon} alt="" />
            </button>
            <ul className={s.basket__list}>
               {cartArr.map(item => (
                  <CartItem key={item.id} data={item} />
               ))}
            </ul>
            <div className={s.results}>
               <p className={s.results__headline}>Сумма заказа</p>
               <p className={s.results__value}>{totalPrice} ₽</p>
            </div>
            <button type="button" className={s.basket__checkout}>Оформить заказ</button>
         </div>
      </div>
   )
}
