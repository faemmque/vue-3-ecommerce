<script lang="ts">
import Cart from '@/components/cart/ShoppingCart.vue';
import SummaryCart from '@/components/cart/SummaryCart.vue';

export default{
  components:{
    Cart,
    SummaryCart,
  }
}
</script>

<template>
  <v-row>
    <v-col cols="9">
      <Cart />
    </v-col>
    <v-col cols="3">
      <SummaryCart />
    </v-col>
  </v-row>
</template>
