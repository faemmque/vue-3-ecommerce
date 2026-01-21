<script lang="ts">
import LeftMenu from '@/components/left/LeftMenu.vue';
import ProductList from '@/components/ProductList.vue';
import { useCategoriesStore } from '@/stores/categories';
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
  },
  mounted(){
      const productsStore = useProductsStore()
      productsStore.fetchProducts()

      const categoriesStore = useCategoriesStore()
      categoriesStore.fetchCategories()
  }
}
</script>

<template>
  <v-row>
    <v-col cols="12" sm="3" md="3" lg="2">
      <LeftMenu />
    </v-col>
    <v-col cols="12"  sm="9" md="9" lg="10">
      <ProductList />
    </v-col>
  </v-row>
</template>
