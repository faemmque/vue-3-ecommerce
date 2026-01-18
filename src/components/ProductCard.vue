<script lang="ts">
import type { PropType } from 'vue';
import type { IProduct } from '../model/types'
import { useCartStore } from '@/stores/cart';
import { formatCurrency } from '@/utils/formatters'
import { mapActions } from 'pinia';

export default{
  props: {
    product: {
      type: Object as PropType<IProduct>,
      required: true
    }
  },
  computed:{
    productImageUrl(){
      return this.product.image ?? '/images/products/default.png'
    }
  },
  methods: {
    ...mapActions(useCartStore, {
      onAddProduct:'onAddProduct'
    }),
    formatCurrency
  }
}
</script>

<template>
    <v-card>
      <v-img
        :src="productImageUrl"
        height="200px"
        cover />
      <v-card-title>{{ product.name }}</v-card-title>

      <v-card-text>
        <p class="mb-4">Esta es una descripcion de ejemplo</p>
        <v-chip variant="flat" color="#e30842" prepend-icon="mdi-cash-multiple">
          {{ formatCurrency(product.price) }}
        </v-chip>
      </v-card-text>

      <v-card-actions>
        <v-btn
          prepend-icon="mdi-cart-plus"
          block
          variant="flat"
          @click="onAddProduct(product)">
          Agregar al carrito
        </v-btn>
      </v-card-actions>
    </v-card>
</template>

