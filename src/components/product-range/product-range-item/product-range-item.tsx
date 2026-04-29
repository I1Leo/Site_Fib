import ProductRangeBtn from "../product-range-btn/product-range-btn"
import styles from "./product-range-item.module.scss"
import { ProductRangeItemProps } from "../../../types/product-range"
import { useAppDispatch, useAppSelector } from "../../../hooks"
import { addItem, removeItemById } from "../../../services/cart";

export default function ProductRangeItem({ products }: ProductRangeItemProps) {
   const dispatch = useAppDispatch();
   const cartArr = useAppSelector(state => state.root.CartSlice.cartArr);
   const isInCart = cartArr.some(item => item.id === products.id);

   const handleClick = () => {
      if (isInCart) {
         dispatch(removeItemById(products.id));
      } else {
         dispatch(addItem({
            id: products.id,
            img: products.image,
            name: products.name,
            price: products.price,
            amount: 1
         }));
      }
   };

   return (
      <li className={styles.container}>
         <div className={styles.imageContainer}>
            <img src={products.image} alt="" />
         </div>
         <h2 className={styles.title}>{products.name}</h2>
         <p className={styles.description}>{products.description}</p>
         <div className={styles.footerContainer}>
            <p className={styles.price}>от {products.price} ₽</p>
            <ProductRangeBtn onClick={handleClick} isInCart={isInCart} />
         </div>
      </li>
   )
}
