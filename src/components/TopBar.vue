<script lang="ts">
import { useCartStore } from '@/stores/cart';
import { mapState } from 'pinia';

export default{
  computed:{
   ...mapState(useCartStore,{
    itemsCount:'cartItemsCount',
    showBadgeItemsCount: state => state.cartItemsCount ? true : false
   }),
  },
  methods:{
    highlightSelectedMenu(option: string){
      return this.$route.name === option ? true : false
    }
  }
}
</script>

<template>
  <v-app-bar flat color="#f4eed4">
    <v-container class="mx-auto d-flex align-center justify-center">
      <v-avatar
        class="me-4 "
        color="#b94866"
        size="32"
        icon="mdi-storefront"
      ></v-avatar>

      <RouterLink to="/">
        <v-btn prepend-icon="mdi-home" :active="highlightSelectedMenu('home')" variant="text" color="#b94866"> Home </v-btn>
      </RouterLink>
      <RouterLink to="/cart">
        <v-badge location="top right" color="#339194" :content="itemsCount" :model-value="showBadgeItemsCount">
          <v-btn prepend-icon="mdi-cart-variant" :active="highlightSelectedMenu('cart')" variant="text" color="#b94866"> Cart </v-btn>
        </v-badge>
      </RouterLink>
      <RouterLink to="/about">
        <v-btn prepend-icon="mdi-information-slab-circle" :active="highlightSelectedMenu('about')" variant="text" color="#b94866"> About </v-btn>
      </RouterLink>

      <v-spacer></v-spacer>

      <v-responsive max-width="160">
        <v-text-field
          density="compact"
          label="Search"
          rounded="lg"
          variant="solo-filled"
          flat
          hide-details
          single-line
        ></v-text-field>
      </v-responsive>
    </v-container>
  </v-app-bar>
</template>
