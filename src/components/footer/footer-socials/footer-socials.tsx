import FooterSocialsList from "../footer-socials-list/footer-socials-list";
import styles from "./footer-socials.module.scss"

export default function FooterSocials () {
   return (
      <div className={styles.container}>
         <h2 className={styles.title}>Мы в соцсетях</h2>
         <FooterSocialsList />
      </div>
   )
}