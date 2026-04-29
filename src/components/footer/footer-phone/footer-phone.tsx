import PhoneButton from "../../generic/phone-button/phone-button"
import styles from "./footer-phone.module.scss"

export default function FooterPhone () {
   return (
      <div className={styles.container}>
         <p className={styles.number}>8 499 391-84-49</p>
         <PhoneButton />
      </div>
   )
}