import NewProductsList from "./new-products-list/new-products-list";
import styles from "./new-products.module.scss"

export default function NewProducts () {
   return (
      <section className={styles.container}>
         <h1 className={styles.title}>Новинки</h1>
         <NewProductsList />
      </section>
   )
}