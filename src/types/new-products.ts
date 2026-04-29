export type NewProduct = {
   id: number
   name: string
   price: number
   image: string
}

export type NewProductItemProps = {
   newProduct: NewProduct
}
