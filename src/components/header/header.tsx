import { useState, useEffect } from 'react'
import DeliveryContainer from './delivery-container/delivery-container'
import styles from './header.module.scss'
import Logo from './logo/logo'
import Nav from './nav/nav'
import PhoneContainer from './phone-container/phone-container'
import CartBtn from './cart-btn/cart-btn'
import Burger from './burger/burger'
import Cart from '../cart/cart'

export default function Header() {

   const [windowWidth, setWindowWidth] = useState(window.innerWidth);

   useEffect(() => {
      const handleResize = () => {
         setWindowWidth(window.innerWidth);
      };

      window.addEventListener('resize', handleResize);

      return () => {
         window.removeEventListener('resize', handleResize);
      };
   }, [])

   return (
      <>
         {windowWidth > 1110 && (
            <header className={styles.header}>
               <Logo />
               <DeliveryContainer />
               <PhoneContainer />
               <Nav />
            </header>
         )}

         {windowWidth <= 1110 && (
            <header className={styles.header}>
               <Logo />
               <p className={styles.number}>8 499 391-84-49</p>
               <CartBtn />
               <Burger />
            </header>
         )}
         <Cart />
      </>

   )
}