import styles from "./footer-communication.module.scss"
import FooterCommunicationList from "../footer-communication-list/footer-communication-list"

export default function FooterCommunication () {
   return (
      <div className={styles.container}>
         <h2 className={styles.title}>Остались вопросы? А мы всегда на связи:</h2>
         <FooterCommunicationList />
      </div>
   )
}