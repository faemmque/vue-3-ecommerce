import { defineStore } from 'pinia'
import type { ICartDetail } from '@/model/types';

export const useCartStore = defineStore('cart', {
  state: () => ({
    details: <Array<ICartDetail>> []
  }),
  getters: {

  },
  actions: {
    onAddProduct(productId: number){
      const detailFound = this.details.find(d => d.productId === productId);

        if (detailFound) {
          detailFound.quantity += 1;
        } else {
          this.details.push({
            productId, quantity: 1
          });
        }
    },
  },
})
