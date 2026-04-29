import FooterPaymentItem from "../footer-payment-item/footer-payment-item";
import styles from "./footer-payment.module.scss";
import visa from "../../../images/footer/visa.svg";
import paypal from "../../../images/footer/paypal.svg";
import mastercard from "../../../images/footer/mastercard.svg";

export default function FooterPayment () {
   return (
      <ul className={styles.container}>
         <FooterPaymentItem src={visa} />
         <FooterPaymentItem src={paypal} />
         <FooterPaymentItem src={mastercard} />
      </ul>
   )
}