import styles from './new-products-item.module.scss'
import { NewProductItemProps } from "../../../types/new-products"

export default function NewProductItem({ newProduct }: NewProductItemProps) {
   return (
      <li className={styles.container}>
         <div>
            <img src={newProduct.image} alt="" />
         </div>
         <div className={styles.about}>
            <p className={styles.name}>{newProduct.name}</p>
            <p className={styles.price}>от {newProduct.price} ₽</p>
         </div>
      </li>
   )
}