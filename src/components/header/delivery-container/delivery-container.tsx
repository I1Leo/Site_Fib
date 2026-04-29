
import styles from "./delivery-container.module.scss"

export default function DeliveryContainer () {
   return (
      <div className={styles.container}>
         <h2 className={styles.heading}>Доставка пасты<span>Москва</span></h2>
         <p className={styles.about}><span className={styles.type}>Яндекс еда</span> <span className={styles.rating}>4.8</span></p>
         <p className={styles.timing}><span>Время доставки</span>от 31 мин</p>
      </div>
   )
}