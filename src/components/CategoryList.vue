<script lang="ts">
import type { ICategory } from '@/model/types';

export default{
  data(){
    return{
      categories: [
        {id:1, name: "Oficina", description:'Artículos y suministros esenciales para la organización y el trabajo diario en espacios de oficina.'},
        {id:2, name: "Computo", description:'Equipos, accesorios y soluciones tecnológicas para el procesamiento de información y la productividad digital.'},
      ] as ICategory[]
    }
  },
  methods:{
    clearCategory(){
      this.$router.push({
        name: 'home'
      });
    },
    selectCategory(categoryId: number){
        this.$router.push({
          name:'category',
          params:{
            categoryId: categoryId
          }
        })


    }
  }
}
</script>

<template>
  <v-sheet rounded="lg">
    <v-list rounded="lg">

      <v-list-subheader>Categorías</v-list-subheader>
      <v-list-item link @click="clearCategory()" :active="$route.name === 'home'">
        <v-list-item-title>
          Todas
        </v-list-item-title>
      </v-list-item>
      <v-list-item :active="$route.name === 'category' && Number($route.params.categoryId) === category.id"
        v-for="category in categories"
        :key="category.id"
        :title="category.name"
        @click="selectCategory(category.id)"
        link>
      </v-list-item>

      <v-divider class="my-2"></v-divider>
      <v-list-subheader>Orden</v-list-subheader>
      <v-list-item color="grey-lighten-4" link>Por precio</v-list-item>
      <v-list-item color="grey-lighten-4" link>Por nombre</v-list-item>
    </v-list>


  </v-sheet>
</template>
