import { defineStore } from 'pinia'
import type { ICategory } from '@/model/types'

export const useCategoriesStore = defineStore('categories', {
  state: () => ({
    loading : true as boolean,
    categories: [] as ICategory[]
  }),
  getters:{},
  actions:{
    fetchCategories(){
      fetch('/data/categories.json')
        .then(response => response.json())
        .then(data => {
          this.categories = data;
          this.loading = false;
        })
    }
  }
});
