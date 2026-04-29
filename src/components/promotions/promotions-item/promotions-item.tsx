import styles from "./promotions-item.module.scss"
import { PromotionItemProps } from "../../../types/promotions"

export default function PromotionsItem({ promotion }: PromotionItemProps) {
   return (
      <li className={promotion.big ? styles.big : undefined}>
         <img className={styles.img} src={promotion.image} alt="" />
      </li>
   )
}