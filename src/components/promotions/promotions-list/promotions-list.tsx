import { PromotionsArr } from "../../../data/promotion-data";
import PromotionsItem from "../promotions-item/promotions-item";
import styles from "./promotions-list.module.scss"

export default function PromotionList () {
   return (
      <ul className={styles.container}>
         {PromotionsArr.map(promotion => (
            <PromotionsItem key={promotion.id} promotion={promotion}/>
         ))}
      </ul>
   )
}