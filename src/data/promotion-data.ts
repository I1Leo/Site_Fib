import { Promotion } from "../types/promotions";
import promoImg from "../images/promotions/promotion-image.jpeg";
import bigPromoImg from "../images/promotions/promotion-image-big.jpeg";


export const PromotionsArr: Promotion[] = [
   {
      id: 1,
      image: bigPromoImg,
      big: true
   },
   {
      id: 2,
      image: promoImg,
      big: false
   },
   {
      id: 3,
      image: promoImg,
      big: false
   },
   {
      id: 4,
      image: promoImg,
      big: false
   },
   {
      id: 5,
      image: promoImg,
      big: false
   },
]