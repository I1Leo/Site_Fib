import { useState } from "react"
import { productRangeArr } from "../../data/product-range-data";
import ProductRangeNavItem from "./product-range-nav-item/product-range-nav-item";
import styles from './product-range.module.scss'
import ProductRangeItem from "./product-range-item/product-range-item";

export default function ProductRange() {

   const [productType, setProductType] = useState('Пицца');

   return (
      <section className={styles.container}>
         <h1 className={styles.title}>Меню</h1>

         <ul className={styles.nav}>
            {productRangeArr.map(item => (
               <ProductRangeNavItem key={item.type} product={item} onClick={() => setProductType(item.type)} type={productType}/>
            ))}
         </ul>

         <ul className={styles.list}>
            {productRangeArr.find(item => item.type === productType)?.products.map(product => (
               <ProductRangeItem key={product.id} products={product} />
            ))}
         </ul>
      </section>
   )
}