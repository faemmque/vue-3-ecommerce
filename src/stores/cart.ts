import { defineStore } from 'pinia'
import type { ICartDetail } from '@/model/types';

export const useCartStore = defineStore('cart', {
  state: () => ({
    details: <Array<ICartDetail>> []
  }),
  getters: {
    cartItemsCount: (state) => {
      let count = 0;

      state.details.forEach(detail => {
        count += detail.quantity;
      });

      return count;
    }
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
    onIncrement(productId: number){
      const detailFound = this.details.find(d => d.productId === productId);

      if (detailFound)
        detailFound.quantity += 1;
    },
    onDecrement(productId: number){
      const detailFound = this.details.find(d => d.productId === productId);

      if (detailFound){
        if ((detailFound.quantity - 1) == 0) {
          this.onDelete(productId);
        }else{
          detailFound.quantity -= 1;
        }

      }

    },
    onDelete(productId: number){
      const index = this.details.findIndex(d => d.productId === productId);

      if (index != -1) {
        this.details.splice(index, 1);
      }
    }
  },
})
