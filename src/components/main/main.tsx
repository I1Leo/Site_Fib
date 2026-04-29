import Slider from "../slider/slider";
import styles from './main.module.scss'
import NewProducts from "../new-products/new-products";
import ProductRange from "../product-range/product-range";
import Promotions from "../promotions/promotions";
import PaymentAndDelivery from "../payment-and-delivery/payment-and-delivery";


export default function Main() {
   return (
      <main>
         <div className={styles.container}>
            <Slider />
            <NewProducts />
            <ProductRange />
            <Promotions />
            <PaymentAndDelivery />
         </div>
      </main>
   )
}