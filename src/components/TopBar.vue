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
        icon="mdi-storefront">
      </v-avatar>

      <RouterLink to="/">
        <v-btn :active="$route.name === 'home' || $route.name === 'category'" variant="text" color="#b94866">
          <v-icon class="mr-0 mr-sm-2" icon="mdi-home" />
          <span class="d-none d-sm-flex">Home</span>
        </v-btn>
      </RouterLink>
      <RouterLink to="/cart">
        <v-badge location="top right" color="#339194" :content="itemsCount" :model-value="showBadgeItemsCount">
          <v-btn :active="highlightSelectedMenu('cart')" variant="text" color="#b94866">
            <v-icon class="mr-0 mr-sm-2" icon="mdi-cart-variant" />
            <span class="d-none d-sm-flex">Cart</span>
          </v-btn>
        </v-badge>
      </RouterLink>
      <RouterLink to="/about">
        <v-btn :active="highlightSelectedMenu('about')" variant="text" color="#b94866">
          <v-icon class="mr-0 mr-sm-2" icon="mdi-information-slab-circle" />
          <span class="d-none d-sm-flex">About</span>
        </v-btn>
      </RouterLink>
      <v-spacer></v-spacer>
    </v-container>
  </v-app-bar>
</template>
