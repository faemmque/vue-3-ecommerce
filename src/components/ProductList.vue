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
      products: 'products',
      loading: 'loading'
    }),
  }
}
</script>

<template>
  <div v-if="loading" class="d-flex justify-center align-center h-100">
    <v-progress-circular color="primary" indeterminate :size="128" :width="7"></v-progress-circular>
  </div>
  <v-row v-else>
    <v-col v-for="product in products" :key="product.id" cols="4">
      <ProductCard
        :product="product"
      />
    </v-col>
  </v-row>
</template>
