import FooterSocialsItem from "../footer-socials-item/footer-socials-item";
import styles from "./footer-socials-list.module.scss"

export default function FooterSocialsList () {
   return (
      <ul className={styles.container}>
         <FooterSocialsItem>YouTube</FooterSocialsItem>
         <FooterSocialsItem>FaceBook</FooterSocialsItem>
         <FooterSocialsItem>Instagram</FooterSocialsItem>
         <FooterSocialsItem>Вконтакте</FooterSocialsItem>
      </ul>
   )
}