import PaymentAndDeliveryItem from "../payment-and-delivery-item/payment-and-delivery-item";
import styles from "./payment-and-delivery-list.module.scss";
import icon1 from "../../../images/payment-and-delivery/payment-delivery-icon1.svg";
import icon2 from "../../../images/payment-and-delivery/payment-delivery-icon2.svg";
import icon3 from "../../../images/payment-and-delivery/payment-delivery-icon3.svg";
import icon4 from "../../../images/payment-and-delivery/payment-delivery-icon4.svg";

export default function PaymentAndDeliveryList() {
   return (
      <ul className={styles.container}>
         <PaymentAndDeliveryItem src={icon1}/>
         <PaymentAndDeliveryItem src={icon2}/>
         <PaymentAndDeliveryItem src={icon3}/>
         <PaymentAndDeliveryItem src={icon4}/>
      </ul>
   )
}