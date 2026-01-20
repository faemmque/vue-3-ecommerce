<script lang="ts">
import { useProductsStore } from '@/stores/products';
import { mapActions, mapState } from 'pinia';

export default {
  methods:{
    ...mapActions(useProductsStore, {
      orderByPrice: 'orderByPrice',
      orderByPriceDesc: 'orderByPriceDesc',
      orderByName: 'orderByName',
      orderByNameDesc: 'orderByNameDesc'
    })
  },
  computed:{
    ...mapState(useProductsStore, {
      order: 'order',
    })
  }
}
</script>

<template>
  <v-list-subheader> <v-icon icon="mdi-order-alphabetical-ascending" class="mr-1"></v-icon> Orden</v-list-subheader>
  <v-list-item link @click="orderByPrice" :active="order === 'price'">Mas económico</v-list-item>
  <v-list-item link @click="orderByPriceDesc" :active="order === 'priceDesc'">Mas costoso</v-list-item>
  <v-list-item link @click="orderByName" :active="order === 'name'">Nombre [A-Z]</v-list-item>
  <v-list-item link @click="orderByNameDesc" :active="order === 'nameDesc'">Nombre [Z-A]</v-list-item>
</template>
