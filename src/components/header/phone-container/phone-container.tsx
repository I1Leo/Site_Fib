
import PhoneButton from '../../generic/phone-button/phone-button'
import styles from './phone-container.module.scss'

export default function PhoneContainer () {
   return (
      <div className={styles.container}>
         <PhoneButton/>
         <p className={styles.phone_number}>8 499 391-84-49</p>
      </div>
   )
}