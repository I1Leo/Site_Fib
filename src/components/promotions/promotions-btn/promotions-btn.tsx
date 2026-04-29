import styles from "./promotions-btn.module.scss"

export default function PromotionsBtn() {
   return (
      <div className={styles.container}>
         <button className={styles.btn}>Все акции</button>
      </div>
   )
}