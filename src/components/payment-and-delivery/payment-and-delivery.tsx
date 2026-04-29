import PaymentAndDeliveryList from "./payment-and-delivery-list/payment-and-delivery-list";
import styles from './payment-and-delivery.module.scss'
import PaymentAndDeliveryMap from "./payment-and-delivery-map/payment-and-delivery-map";

export default function PaymentAndDelivery() {
   return (
      <section className={styles.container}>
         <div className={styles.wrapper}>
            <h1 className={styles.title}>Оплата и доставка</h1>
            <PaymentAndDeliveryList />
            <PaymentAndDeliveryMap />
         </div>
      </section>
   )
}