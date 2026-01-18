<script lang="ts">
import ProductCard from '@/components/ProductCard.vue';
import { useProductsStore } from '@/stores/products';
import { mapState } from 'pinia';

export default{
  components:{
      ProductCard,
  },
  computed:{
    ...mapState(useProductsStore,{
      products: 'products'
    }),
  }
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
