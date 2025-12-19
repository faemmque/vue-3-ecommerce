<script lang="ts">
  import ProductCard from './ProductCard.vue';
  import type { IProduct } from './IProduct'

  export default{
    components:{
        ProductCard
    },
    data(){
      return{
        products: <Array<IProduct>> [
          {id: 1, name: "Silla", price: 56},
          {id: 2, name: "Monnitor", price: 450},
          {id: 3, name: "Microfono", price: 20}
        ]
      }
    },
    methods: {
      onAddProduct(id: number) {
        console.log("Agregando producto " + id)
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
  </div>
</template>
