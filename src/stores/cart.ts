import { defineStore } from 'pinia'
import type { ICartDetail, IProduct } from '@/model/types';

export const useCartStore = defineStore('cart', {
  state: () => ({
    details: [] as ICartDetail[]
  }),
  getters: {
    cartItemsCount: (state) => {
      let count = 0;

      state.details.forEach(detail => {
        count += detail.quantity;
      });

      return count;
    },
    getCartTotal: (state) => {
      let total = 0;

      state.details.forEach(detail => {
        total += (detail.quantity * detail.product.price);
      });

      return total;
    }
  },
  actions: {
    onAddProduct(product: IProduct){
      const detailFound = this.details.find(d => d.product.id === product.id);

        if (detailFound) {
          detailFound.quantity += 1;
        } else {
          this.details.push({
            product, quantity: 1
          });
        }
    },
    onIncrement(productId: number){
      const detailFound = this.details.find(d => d.product.id === productId);

      if (detailFound)
        detailFound.quantity += 1;
    },
    onDecrement(productId: number){
      const detailFound = this.details.find(d => d.product.id === productId);

      if (detailFound){
        if ((detailFound.quantity - 1) == 0) {
          this.onDelete(productId);
        }else{
          detailFound.quantity -= 1;
        }
      }
    },
    onDelete(productId: number){
      const index = this.details.findIndex(d => d.product.id === productId);

      if (index != -1) {
        this.details.splice(index, 1);
      }
    }
  },
})
