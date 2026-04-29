import styles from "./footer-logo.module.scss";
import logo from "../../../images/footer/logo.png";

export default function FooterLogo () {
   return (
      <div className={styles.container}>
         <img src={logo} alt="" />
      </div>
   )
}