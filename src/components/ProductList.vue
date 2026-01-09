<script lang="ts">
  import Cart from './Cart.vue';
  import ProductCard from './ProductCard.vue';
  import type { ICartDetail, IProduct } from '../model/types'

  export default{
    components:{
        ProductCard,
        Cart,
    },
    data(){
      return{
        products: <Array<IProduct>> [
          {id: 1, name: "Silla", price: 56},
          {id: 2, name: "Monitor", price: 450},
          {id: 3, name: "Microfono", price: 20},
          {id: 4, name: "Laptop", price: 11600},
          {id: 5, name: "Teclado", price: 980},
          {id: 6, name: "SSD", price: 1350}
        ],
        details:<Array<ICartDetail>>[]
      }
    },
    methods: {
      onAddProduct(productId: number) {
        const detailFound = this.details.find(d => d.productId === productId);

        if (detailFound) {
          detailFound.quantity += 1;
        } else {
          this.details.push({
            productId, quantity: 1
          });
        }
      }
    }
  }

</script>

<template>
  <v-row>
    <v-col v-for="product in products" cols="4">
      <ProductCard
        :product="product"
        @addProduct="onAddProduct(product.id)"
      />
    </v-col>
  </v-row>
</template>
