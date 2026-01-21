import type { IProduct } from '@/model/types';
import { defineStore } from 'pinia';

export const useProductsStore = defineStore('products', {
  state: () => ({
    order: 'price' as string,
    categoryId: null as number|null,
    loading: true as boolean,
    _products: [] as IProduct[]
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
    fetchProducts(){
      fetch('/data/products.json')
        .then(response => response.json())
        .then(data => {
          this._products = data;
          this.loading = false;
        })
    },
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
