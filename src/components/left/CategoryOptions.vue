<script lang="ts">
import { mapState } from 'pinia';
import { useCategoriesStore } from '@/stores/categories';

export default{
  computed:{
    ...mapState(useCategoriesStore, {
      categories: 'categories'
    }),
  },
  methods:{
    clearCategory(){
      this.$router.push({
        name: 'home'
      });
    },
    goToCategory(categoryId: number){
      this.$router.push({
        name:'category',
        params:{
          categoryId: categoryId
        }
      })
    },
  }
}
</script>

<template>
  <v-list-subheader> <v-icon icon="mdi-list-box" class="mr-1"></v-icon> Categorías</v-list-subheader>
  <v-list-item link @click="clearCategory()" :active="$route.name === 'home'">
    <v-list-item-title>
      Todas
    </v-list-item-title>
  </v-list-item>
  <v-list-item :active="$route.name === 'category' && Number($route.params.categoryId) === category.id"
    v-for="category in categories"
    :key="category.id"
    :title="category.name"
    @click="goToCategory(category.id)"
    link>
  </v-list-item>
</template>
