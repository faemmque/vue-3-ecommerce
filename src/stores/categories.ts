import { defineStore } from 'pinia'
import type { ICategory } from '@/model/types'

export const useCategoriesStore = defineStore('categories', {
  state: () => ({
    categories: [
        { id:1, name: "Oficina", description:'Artículos y suministros esenciales para la organización y el trabajo diario en espacios de oficina.' },
        { id:2, name: "Computo", description:'Equipos, accesorios y soluciones tecnológicas para el procesamiento de información y la productividad digital.' },
      ] as ICategory[]
  }),
  getters:{},
  actions:{}
});
