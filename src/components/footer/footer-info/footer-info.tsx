import FooterInfoItem from "../footer-info-item/footer-info-item";
import styles from "./footer-info.module.scss"

export default function FooterInfo() {
   return (
      <ul className={styles.container}>
         <FooterInfoItem>Калорийность и состав</FooterInfoItem>
         <FooterInfoItem>Правовая информация</FooterInfoItem>
      </ul>
   )
}