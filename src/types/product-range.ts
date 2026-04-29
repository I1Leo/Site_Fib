export type Product = {
   id: string
   name: string
   description: string
   image: string
   price: number
}

export type ProductRange = {
   type: string
   products: Product[]
}

export type ProductRangeItemProps = {
   products: Product
}

export type ProductRangeNavItemProps = {
   product: ProductRange
   onClick: () => void
   type: string
}

export type TProductRangeBtn = {
   onClick?: () => void
   isInCart: boolean
}