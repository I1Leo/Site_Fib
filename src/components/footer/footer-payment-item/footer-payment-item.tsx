import { FooterPaymentItemProps } from "../../../types/footer"

export default function FooterPaymentItem ( {src} : FooterPaymentItemProps) {
   return (
      <li>
         <img src={src} alt="" />
      </li>
   )
}