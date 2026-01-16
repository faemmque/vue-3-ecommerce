<script lang="ts">
import ProductCard from '@/components/ProductCard.vue';
import type { IProduct } from '@/model/types'

export default{
  components:{
      ProductCard,
  },
  data(){
    return{
      products: [
        {id: 1, name: "Silla", price: 1560, image:'/images/products/silla.jpg'},
        {id: 2, name: "Monitor", price: 2300, image:'/images/products/monitor.jpg'},
        {id: 3, name: "Microfono", price: 780, image:'/images/products/microfono.jpg'},
        {id: 4, name: "Mouse", price: 350},
        {id: 5, name: "Laptop", price: 11600, image:'/images/products/laptop.jpg'},
        {id: 6, name: "Teclado", price: 980, image:'/images/products/teclado.jpg'},
        {id: 7, name: "SSD", price: 1350, image:'/images/products/ssd.jpg'}
      ] as IProduct[]
    }
  },
}
</script>

<template>
  <v-row>
    <v-col v-for="product in products" :key="product.id" cols="4">
      <ProductCard
        :product="product"
      />
    </v-col>
  </v-row>
</template>
