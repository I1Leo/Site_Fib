import PromotionList from "./promotions-list/promotions-list";
import styles from "./promotions.module.scss"
import PromotionsBtn from "./promotions-btn/promotions-btn";

export default function Promotions() {
   return (
      <section className={styles.container}>
         <h1 className={styles.title}>Наши <span>акции</span></h1>
         <PromotionList />
         <PromotionsBtn />
      </section>
   )
}