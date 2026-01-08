export interface IProduct{
  id: number,
  name: string,
  price: number
}

export interface ICartDetail{
  productId: number,
  quantity: number
}

export interface ICategory{
  id: number,
  name: string
}
