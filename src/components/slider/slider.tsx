import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import styles from './slider.module.scss'
import Navigate from './navigate/navigate';
import slideImg2 from "../../images/slider/slider__img2.png"
import slideImg3 from "../../images/slider/slider__img3.png"

const slides = [slideImg2, slideImg3, slideImg2, slideImg3, slideImg2, slideImg3];

export default function Slider() {
   return (
      <div className={styles.container}>
         <Swiper
            className={styles.slider}
            modules={[Navigation, Keyboard]}
            navigation={{
               nextEl: '#next-btn',
               prevEl: '#prev-btn',
            }}
            loop={true}
            slidesPerView={2}
            centeredSlides={true}
            keyboard={true}
         >
            {slides.map((src, i) => (
               <SwiperSlide key={i} className={styles.slide}>
                  <img className={styles.img} src={src} alt="" />
               </SwiperSlide>
            ))}
            <Navigate />
         </Swiper>
      </div>
   )
}
