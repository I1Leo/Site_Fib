import styles from "./logo.module.scss"
import logo from "../../../images/header/logo.png"


export default function Logo() {
   return (
      <div className={styles.container}>
         <img src={logo} alt="" />
      </div>
   )
}