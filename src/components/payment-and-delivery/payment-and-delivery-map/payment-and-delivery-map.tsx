import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";

export default function PaymentAndDeliveryMap() {
   return (
      <YMaps >
         <Map defaultState={{ center: [55.661958, 37.480148], zoom: 16 }} width="100%" height="322px">
            <Placemark defaultGeometry={[55.661638, 37.480148]} options={{ iconColor: "#F7D22D" }} />
         </Map>
      </YMaps>
   )
}