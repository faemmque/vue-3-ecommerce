<script lang="ts">
  import Cart from './Cart.vue';
  import ProductCard from './ProductCard.vue';
  import type { ICartDetail, IProduct } from './types'

  export default{
    components:{
        ProductCard,
        Cart,
    },
    data(){
      return{
        products: <Array<IProduct>> [
          {id: 1, name: "Silla", price: 56},
          {id: 2, name: "Monnitor", price: 450},
          {id: 3, name: "Microfono", price: 20}
        ],
        details:<Array<ICartDetail>>[]
      }
    },
    methods: {
      onAddProduct(productId: number) {
        // console.log("Agregando producto " + productId)

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
  <div>
    <ProductCard
      v-for="product in products"
      :product="product"
      @addProduct="onAddProduct(product.id)"
    />
    <Cart :details="details" />
  </div>
</template>
