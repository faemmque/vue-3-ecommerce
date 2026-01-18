<script lang="ts">
import LeftMenu from '@/components/left/LeftMenu.vue';
import ProductList from '@/components/ProductList.vue';
import { useProductsStore } from '@/stores/products';

function  updateCategoryFromRouterParams(categoryIdParam: string){
  const productsStore = useProductsStore();
  const categoryId = Number(categoryIdParam);
  productsStore.selectCategory(categoryId);
}

export default{
  components:{
    ProductList,
    LeftMenu
  },
  beforeRouteEnter(to){
    updateCategoryFromRouterParams(to.params.categoryId as string);
  },
  beforeRouteUpdate(to){
    updateCategoryFromRouterParams(to.params.categoryId as string);
  }
}
</script>

<template>
  <v-row>
    <v-col cols="2">
      <LeftMenu />
    </v-col>
    <v-col cols="10">
      <ProductList />
    </v-col>
  </v-row>
</template>
