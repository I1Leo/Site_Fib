import styles from "./footer.module.scss"
import FooterAddress from "./footer-address/footer-address"
import FooterCommunication from "./footer-communication/footer-communication"
import FooterInfo from "./footer-info/footer-info"
import FooterLogo from "./footer-logo/footer-logo"
import FooterPayment from "./footer-payment/footer-payment"
import FooterPhone from "./footer-phone/footer-phone"
import FooterRights from "./footer-rights/footer-rights"
import FooterSocials from "./footer-socials/footer-socials"

export default function Footer() {
   return (
      <footer className={styles.footer}>
         <FooterLogo />
         <FooterInfo />
         <FooterSocials />
         <FooterAddress />
         <FooterRights />
         <FooterPayment />
         <FooterCommunication />
         <FooterPhone />
      </footer>
   )
}