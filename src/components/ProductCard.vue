
<script lang="ts">
import type { PropType } from 'vue';
import type { IProduct } from '../model/types'
import { useCartStore } from '@/stores/cart';

export default{
  props: {
    product: {
      type: Object as PropType<IProduct>,
      required: true
    }
  },
  methods: {
    onAddButtonClick(){
      const cartStore = useCartStore();
      cartStore.onAddProduct(this.product.id)
    }
  }
}

</script>

<template>
    <v-card>

      <v-img
        src="https://cdn.pixabay.com/photo/2017/12/15/19/07/ecommerce-3021581_1280.jpg"
        height="200px"
        cover />
      <v-card-title>{{ product.name }}</v-card-title>

      <v-card-text>
        <p class="mb-4">Esta es una descripcion de ejemplo</p>
        <v-chip variant="flat" color="#e30842">
          $ {{ product.price }}
        </v-chip>
      </v-card-text>

      <v-card-actions>
        <v-btn
          prepend-icon="mdi-cart-plus"
          block
          variant="flat"
          @click="onAddButtonClick"
        >
          Agregar al carrito
        </v-btn>
      </v-card-actions>

    </v-card>
</template>

