import type { IProduct } from '@/model/types';
import { defineStore } from 'pinia';

export const useProductsStore = defineStore('products', {
  state: () => ({
    order: 'price' as string,
    categoryId: null as number|null,
    _products: [
        { id: 1, name: "Silla", price: 1560, image:'/images/products/silla.jpg', categoryId:1 },
        { id: 2, name: "Monitor", price: 2300, image:'/images/products/monitor.jpg', categoryId:2 },
        { id: 3, name: "Microfono", price: 780, image:'/images/products/microfono.jpg', categoryId:2 },
        { id: 4, name: "Mouse", price: 350, categoryId:2 },
        { id: 5, name: "Laptop", price: 11600, image:'/images/products/laptop.jpg', categoryId:2 },
        { id: 6, name: "Teclado", price: 980, image:'/images/products/teclado.jpg', categoryId:2 },
        { id: 7, name: "SSD", price: 1350, image:'/images/products/ssd.jpg', categoryId:2 },
        { id: 8, name: "Checador", price: 1480, image:'/images/products/checador.jpg', categoryId:1 },
        { id: 9, name: "Escritorio", price: 3500, image:'/images/products/escritorio.jpg', categoryId:1 },
        { id: 10, name: "Grapadora", price: 90, image:'/images/products/grapadora.jpg', categoryId:1 },
      ] as IProduct[]
  }),
  getters:{
    products(state){
      let products = state._products;

      // filtrar
      if(state.categoryId){
        products = state._products.filter(p => p.categoryId === state.categoryId);
      }

      // ordenar
      if (state.order === '') {
        return products
      } else if(state.order === 'price') {
        return products.sort((a, b) => a.price - b.price);
      } else if(state.order === 'priceDesc') {
        return products.sort((a, b) => b.price - a.price);
      } else if(state.order === 'name') {
        return products.sort((a, b) => a.name.localeCompare(b.name))
      } else if(state.order === 'nameDesc') {
        return products.sort((a, b) => b.name.localeCompare(a.name))
      }

    }
  },
  actions:{
    selectCategory(categoriId: number){
      this.categoryId = categoriId;
    },
    orderByPrice(){
      this.order = 'price'
    },
    orderByPriceDesc(){
      this.order = 'priceDesc'
    },
    orderByName(){
      this.order = 'name'
    },
    orderByNameDesc(){
      this.order = 'nameDesc'
    },
  }
});
