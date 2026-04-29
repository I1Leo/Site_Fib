import { ProductRange } from "../types/product-range";
import product1 from "../images/product-range/product1.png";
import product2 from "../images/product-range/product2.png";
import product3 from "../images/product-range/product3.png";
import product4 from "../images/product-range/product4.png";
import { nanoid } from "@reduxjs/toolkit";


export const productRangeArr: ProductRange[] = [
   {
      type: 'Пицца',
      products: [
         {
            id: nanoid(),
            name: 'Пицца 1',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque exercitationem ut hic necessitatibus rerum, laboriosam rem fugit maiores reiciendis dolor ex eum, consequuntur nobis eos. Dolorem consequuntur quod fugit beatae! пиццы 1',
            image: product1,
            price: 400
         },
         {
            id: nanoid(),
            name: 'Пицца 2',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque exercitationem ut hic necessitatibus rerum, laboriosam rem fugit maiores reiciendis dolor ex eum, consequuntur nobis eos. Dolorem consequuntur quod fugit beatae! пиццы 2',
            image: product2,
            price: 600
         },
         {
            id: nanoid(),
            name: 'Пицца 3',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque exercitationem ut hic necessitatibus rerum, laboriosam rem fugit maiores reiciendis dolor ex eum, consequuntur nobis eos. Dolorem consequuntur quod fugit beatae! пиццы 3',
            image: product3,
            price: 450
         },
         {
            id: nanoid(),
            name: 'Пицца 4',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque exercitationem ut hic necessitatibus rerum, laboriosam rem fugit maiores reiciendis dolor ex eum, consequuntur nobis eos. Dolorem consequuntur quod fugit beatae! пиццы 4',
            image: product4,
            price: 500
         }
      ]
   },
   {
      type: 'Паста',
      products: [
         {
            id: nanoid(),
            name: 'Паста 1',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque exercitationem ut hic necessitatibus rerum, laboriosam rem fugit maiores reiciendis dolor ex eum, consequuntur nobis eos. Dolorem consequuntur quod fugit beatae! пасты 1',
            image: product1,
            price: 450
         },
         {
            id: nanoid(),
            name: 'Паста 2',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque exercitationem ut hic necessitatibus rerum, laboriosam rem fugit maiores reiciendis dolor ex eum, consequuntur nobis eos. Dolorem consequuntur quod fugit beatae! пасты 2',
            image: product2,
            price: 500
         },
         {
            id: nanoid(),
            name: 'Паста 3',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque exercitationem ut hic necessitatibus rerum, laboriosam rem fugit maiores reiciendis dolor ex eum, consequuntur nobis eos. Dolorem consequuntur quod fugit beatae! пасты 3',
            image: product3,
            price: 390
         },
         {
            id: nanoid(),
            name: 'Паста 4',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque exercitationem ut hic necessitatibus rerum, laboriosam rem fugit maiores reiciendis dolor ex eum, consequuntur nobis eos. Dolorem consequuntur quod fugit beatae! пасты 4',
            image: product4,
            price: 480
         }
      ]
   },
   {
      type: 'Супы',
      products: [
         {
            id: nanoid(),
            name: 'Суп 1',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque exercitationem ut hic necessitatibus rerum, laboriosam rem fugit maiores reiciendis dolor ex eum, consequuntur nobis eos. Dolorem consequuntur quod fugit beatae! супа 1',
            image: product1,
            price: 200
         },
         {
            id: nanoid(),
            name: 'Суп 2',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque exercitationem ut hic necessitatibus rerum, laboriosam rem fugit maiores reiciendis dolor ex eum, consequuntur nobis eos. Dolorem consequuntur quod fugit beatae! супа 2',
            image: product2,
            price: 300
         },
         {
            id: nanoid(),
            name: 'Суп 3',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque exercitationem ut hic necessitatibus rerum, laboriosam rem fugit maiores reiciendis dolor ex eum, consequuntur nobis eos. Dolorem consequuntur quod fugit beatae! супа 3',
            image: product3,
            price: 350
         },
         {
            id: nanoid(),
            name: 'Суп 4',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque exercitationem ut hic necessitatibus rerum, laboriosam rem fugit maiores reiciendis dolor ex eum, consequuntur nobis eos. Dolorem consequuntur quod fugit beatae! супа 4',
            image: product4,
            price: 250
         }
      ]
   },
   {
      type: 'Салаты',
      products: [
         {
            id: nanoid(),
            name: 'Салат 1',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque exercitationem ut hic necessitatibus rerum, laboriosam rem fugit maiores reiciendis dolor ex eum, consequuntur nobis eos. Dolorem consequuntur quod fugit beatae! салата 1',
            image: product1,
            price: 350
         },
         {
            id: nanoid(),
            name: 'Салат 2',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque exercitationem ut hic necessitatibus rerum, laboriosam rem fugit maiores reiciendis dolor ex eum, consequuntur nobis eos. Dolorem consequuntur quod fugit beatae! салата 2',
            image: product2,
            price: 150
         },
         {
            id: nanoid(),
            name: 'Салат 3',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque exercitationem ut hic necessitatibus rerum, laboriosam rem fugit maiores reiciendis dolor ex eum, consequuntur nobis eos. Dolorem consequuntur quod fugit beatae! салата 3',
            image: product3,
            price: 250
         },
         {
            id: nanoid(),
            name: 'Салат 4',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque exercitationem ut hic necessitatibus rerum, laboriosam rem fugit maiores reiciendis dolor ex eum, consequuntur nobis eos. Dolorem consequuntur quod fugit beatae! салата 4',
            image: product4,
            price: 200
         }
      ]
   },
   {
      type: 'Напитки',
      products: [
         {
            id: nanoid(),
            name: 'Напиток 1',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque exercitationem ut hic necessitatibus rerum, laboriosam rem fugit maiores reiciendis dolor ex eum, consequuntur nobis eos. Dolorem consequuntur quod fugit beatae! напитка 1',
            image: product1,
            price: 50
         },
         {
            id: nanoid(),
            name: 'Напиток 2',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque exercitationem ut hic necessitatibus rerum, laboriosam rem fugit maiores reiciendis dolor ex eum, consequuntur nobis eos. Dolorem consequuntur quod fugit beatae! напитка 2',
            image: product2,
            price: 99
         },
         {
            id: nanoid(),
            name: 'Напиток 3',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque exercitationem ut hic necessitatibus rerum, laboriosam rem fugit maiores reiciendis dolor ex eum, consequuntur nobis eos. Dolorem consequuntur quod fugit beatae! напитка 3',
            image: product3,
            price: 65
         },
         {
            id: nanoid(),
            name: 'Напиток 4',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque exercitationem ut hic necessitatibus rerum, laboriosam rem fugit maiores reiciendis dolor ex eum, consequuntur nobis eos. Dolorem consequuntur quod fugit beatae! напитка 4',
            image: product4,
            price: 120
         }
      ]
   },
   {
      type: 'Десерты',
      products: [
         {
            id: nanoid(),
            name: 'Десерт 1',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque exercitationem ut hic necessitatibus rerum, laboriosam rem fugit maiores reiciendis dolor ex eum, consequuntur nobis eos. Dolorem consequuntur quod fugit beatae! десерта 1',
            image: product1,
            price: 120
         },
         {
            id: nanoid(),
            name: 'Десерт 2',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque exercitationem ut hic necessitatibus rerum, laboriosam rem fugit maiores reiciendis dolor ex eum, consequuntur nobis eos. Dolorem consequuntur quod fugit beatae! десерта 2',
            image: product2,
            price: 160
         },
         {
            id: nanoid(),
            name: 'Десерт 3',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque exercitationem ut hic necessitatibus rerum, laboriosam rem fugit maiores reiciendis dolor ex eum, consequuntur nobis eos. Dolorem consequuntur quod fugit beatae! десерта 3',
            image: product3,
            price: 105
         },
         {
            id: nanoid(),
            name: 'Десерт 4',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque exercitationem ut hic necessitatibus rerum, laboriosam rem fugit maiores reiciendis dolor ex eum, consequuntur nobis eos. Dolorem consequuntur quod fugit beatae! десерта 4',
            image: product4,
            price: 240
         }
      ]
   },
   {
      type: 'Бакалея',
      products: [
         {
            id: nanoid(),
            name: 'Продукт 1',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque exercitationem ut hic necessitatibus rerum, laboriosam rem fugit maiores reiciendis dolor ex eum, consequuntur nobis eos. Dolorem consequuntur quod fugit beatae! продукта 1',
            image: product1,
            price: 120
         },
         {
            id: nanoid(),
            name: 'Продукт 2',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque exercitationem ut hic necessitatibus rerum, laboriosam rem fugit maiores reiciendis dolor ex eum, consequuntur nobis eos. Dolorem consequuntur quod fugit beatae! продукта 2',
            image: product2,
            price: 160
         },
         {
            id: nanoid(),
            name: 'Продукт 3',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque exercitationem ut hic necessitatibus rerum, laboriosam rem fugit maiores reiciendis dolor ex eum, consequuntur nobis eos. Dolorem consequuntur quod fugit beatae! продукта 3',
            image: product3,
            price: 105
         },
         {
            id: nanoid(),
            name: 'Продукт 4',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque exercitationem ut hic necessitatibus rerum, laboriosam rem fugit maiores reiciendis dolor ex eum, consequuntur nobis eos. Dolorem consequuntur quod fugit beatae! продукта 4',
            image: product4,
            price: 240
         }
      ]
   }
]
