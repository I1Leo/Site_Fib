import styles from "./payment-and-delivery-item.module.scss"
import { DeliveryItemProps } from "../../../types/payment-and-delivery"

export default function PaymentAndDeliveryItem({src} : DeliveryItemProps) {
   return (
      <li className={styles.item}>
         <div className={styles.iconContainer}>
            <img src={src} alt="" />
         </div>
         <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
      </li>
   )
}