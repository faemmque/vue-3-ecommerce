
<script lang="ts">
import type { PropType } from 'vue';
import type { ICartDetail } from '../model/types';
import { useCartStore } from '@/stores/cart';

export default{
  // props:{
  //   details:{
  //     type: Object as PropType<Array<ICartDetail>>,
  //     required: true
  //   }
  // }
  computed:{
    details(){
      const cartStore = useCartStore();
      return cartStore.details;
    }
  }
}

</script>

<template>
  <v-card>
    <v-card-title>Productos agreados al carrito:</v-card-title>
    <v-card-text>
      <v-list>
        <v-list-item v-for="detail in details"
          lines="one"
          :key="detail.productId"
          :value="detail.productId"
          prepend-avatar="https://cdn.pixabay.com/photo/2017/03/29/04/09/shopping-icon-2184065_1280.png"
        >
          <v-list-item-title>
            Producto: {{ detail.productId }} - (Qty: {{ detail.quantity }} )
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-card-text>
  </v-card>

</template>
