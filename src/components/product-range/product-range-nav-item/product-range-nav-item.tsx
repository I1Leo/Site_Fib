import styles from './product-range-nav-item.module.scss'
import { ProductRangeNavItemProps } from "../../../types/product-range"

export default function ProductRangeNavItem({ product, onClick, type}: ProductRangeNavItemProps) {
   return (
      <li role="button" tabIndex={0} className={type === product.type ? `${styles.item} ${styles.active}` : styles.item} onClick={onClick} onKeyDown={(e) => e.key === 'Enter' && onClick()}>{product.type}</li>
   )
}