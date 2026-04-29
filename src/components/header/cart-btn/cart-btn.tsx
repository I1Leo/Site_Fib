import { useAppDispatch, useAppSelector } from "../../../hooks"
import { toggleCart } from "../../../services/cart";
import styles from "./cart-btn.module.scss"

export default function CartBtn () {
   
   const amount = useAppSelector(state => state.root.CartSlice.amount);
   const dispatch = useAppDispatch();

   const handleClick = () => {
      dispatch(toggleCart());
   };

   return (
      <button className={styles.btn} onClick={handleClick}>
         <span className={styles.text}>Корзина</span>
         <span className={styles.value}>{amount}</span>
      </button>
   )
}