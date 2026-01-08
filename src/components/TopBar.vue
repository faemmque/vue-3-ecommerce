<script lang="ts">
  import { RouterLink } from 'vue-router';
  import { useCartStore } from '@/stores/cart';

  export default{
    computed:{
      itemsCount(){
        const cartStore = useCartStore();
        return cartStore.cartItemsCount;
      },
      showBadgeItemsCount(){
        return this.itemsCount ? true : false
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
      ></v-avatar>

      <RouterLink to="/">
        <v-btn variant="text" color="#b94866"> Home </v-btn>
      </RouterLink>
      <RouterLink to="/cart">
        <v-badge location="top right" color="#339194" :content="itemsCount" :model-value="showBadgeItemsCount">
          <v-btn variant="text" color="#b94866"> Cart </v-btn>
        </v-badge>
      </RouterLink>
      <RouterLink to="/about">
        <v-btn variant="text" color="#b94866"> About </v-btn>
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
