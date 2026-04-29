import styles from "./footer-communication-item.module.scss"
import { FooterCommunicationItemProps } from "../../../types/footer"

export default function FooterCommunicationItem({ src, text }: FooterCommunicationItemProps) {
   return (
      <li className={text ? `${styles.container} ${styles.big}` : styles.container}>
         <a href="#" className={text ? styles.textlink : styles.link}>
            {text ? (<p className={styles.text}>{text}</p>) : (<img src={src} alt="" />)}
         </a>
      </li>
   )
}