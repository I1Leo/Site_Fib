import FooterCommunicationItem from "../footer-communication-item/footer-communication-item";
import styles from "./footer-communication-list.module.scss"
import viber from "../../../images/footer/viber.svg";
import skype from "../../../images/footer/skype.svg";
import messanger from "../../../images/footer/messanger.svg";
import telegram from "../../../images/footer/telegram.svg";
import facebook from "../../../images/footer/facebook.svg";
import vk from "../../../images/footer/vk.svg";

export default function FooterCommunicationList() {
   return (
      <ul className={styles.container}>
         <FooterCommunicationItem src={viber} />
         <FooterCommunicationItem src={skype} />
         <FooterCommunicationItem src={messanger} />
         <FooterCommunicationItem src={telegram} />
         <FooterCommunicationItem src={facebook} />
         <FooterCommunicationItem src={vk} />
         <FooterCommunicationItem text="Написать нам" />
      </ul>
   )
}