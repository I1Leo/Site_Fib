import { newProductsArr } from "../../../data/new-products-data"
import NewProductItem from "../new-products-item/new-products-item"
import styles from "./new-products-list.module.scss"

export default function NewProductsList() {
   return (
      <ul className={styles.container}>
         {newProductsArr.map(item => (
            <NewProductItem key={item.id} newProduct={item} />
         ))}
      </ul>
   )
}