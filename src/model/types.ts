export interface IProduct{
  id: number,
  name: string,
  price: number,
  image: string,
  categoryId: number,
}

export interface ICartDetail{
  product: IProduct,
  quantity: number,
}

export interface ICategory{
  id: number,
  name: string,
  description: string,
}
