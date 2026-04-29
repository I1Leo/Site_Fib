import styles from "./footer-info-item.module.scss"
import { FooterInfoItemProps } from "../../../types/footer"

export default function FooterInfoItem ({children} : FooterInfoItemProps) {
   return (
      <li className={styles.item}>
         <a href="#">{children}</a>
      </li>
   )
}