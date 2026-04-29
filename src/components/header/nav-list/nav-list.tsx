import styles from './nav-list.module.scss'

export default function NavList () {
   return (
      <ul className={styles.list}>
         <li className={styles.item}>Пицца</li>
         <li className={styles.item}>Паста</li>
         <li className={styles.item}>Супы</li>
         <li className={styles.item}>Салаты</li>
         <li className={styles.item}>Напитки</li>
         <li className={styles.item}>Десерты</li>
         <li className={styles.item}>Бакалея</li>
         <li className={styles.item}>Антипасти</li>
         <li className={styles.item}>Акции</li>
         <li className={styles.item}>Комбо</li>
         <li className={styles.item}>Контакты</li>
      </ul>
   )
}