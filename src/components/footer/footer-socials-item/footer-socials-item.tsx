import styles from "./footer-socials-item.module.scss"
import { FooterSocialsItemProps } from "../../../types/footer"

export default function FooterSocialsItem ({children} : FooterSocialsItemProps) {
   return (
      <li className={styles.item}>
         <a href="#">{children}</a>
      </li>
   )
}