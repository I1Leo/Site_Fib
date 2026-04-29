import CartBtn from '../cart-btn/cart-btn'
import LoginBtn from '../login-btn/login-btn'
import NavList from '../nav-list/nav-list'
import styles from './nav.module.scss'

export default function NavContainer () {
   return (
      <nav className={styles.navigation}>
         <NavList/>
         <LoginBtn/>
         <CartBtn/>
      </nav>
   )
}