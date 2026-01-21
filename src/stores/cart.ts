import { defineStore } from 'pinia'
import type { ICartDetail, IProduct } from '@/model/types';
import { useLocalStorage } from '@vueuse/core';

export const useCartStore = defineStore('cart', {
  state: () => ({
    details: useLocalStorage<ICartDetail[]>('details',[])
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
    },
    whatsappMessage(state){
      let message = 'Hola, quiero realizar la siguiente compra:\n\n';
      message += '--------------------\n';

      state.details.forEach(d => {
        message += `Producto: ${d.product.name}\n`;
        message += `Cantidad: ${d.quantity}\n`;
        message += `SubTotal: $${d.product.price * d.quantity}\n`;
        message += '--------------------\n';
      });

      message += '--------------------\n';
      message += `Total a pagar: $${this.getCartTotal}\n`;
      message += `Muchas gracias!`;
      return encodeURI(message)
    },
    whatsappLink(){
      return 'https://api.whatsapp.com/send/?phone=529931504041&text=' + this.whatsappMessage;
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
