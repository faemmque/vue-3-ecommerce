<script lang="ts">
import type { ICartDetail } from '@/model/types';
import { useCartStore } from '@/stores/cart';
import type { PropType } from 'vue';
import { formatCurrency } from '@/utils/formatters';
import { mapActions } from 'pinia';

export default {
  props:{
    detail:{
      type: Object as PropType<ICartDetail>,
      required: true
    }
  },
  computed:{
    // cartStore(){
    //   return useCartStore();
    // },
    calculateSubTotal(){
      return this.detail.quantity * this.detail.product.price
    },
    productImageUrl(){
      return this.detail.product.image ?? '/images/products/default.png'
    }
  },
  methods:{
    ...mapActions(useCartStore,{
      onClickDecrementQuantity: 'onDecrement',
      onClickIncrementQuantity: 'onIncrement',
      onClickDeleteProduct: 'onDelete'
    }),
    formatCurrency,
  }
}
</script>

<template>
  <tr>
    <td>
      <v-avatar :image="productImageUrl"></v-avatar>
      {{ detail.product.name }}</td>
    <td>{{ formatCurrency(detail.product.price) }}</td>
    <td>{{ detail.quantity }}</td>
    <td>{{ formatCurrency(calculateSubTotal) }}</td>
    <td>
      <v-btn
        class="mr-2"
        icon="mdi-plus"
        size="x-small"
        @click="onClickIncrementQuantity(detail.product.id)" />
      <v-btn
        class="mr-2"
        icon="mdi-minus"
        size="x-small"
        @click="onClickDecrementQuantity(detail.product.id)" />
      <v-btn
        class="mr-2"
        icon="mdi-trash-can"
        size="x-small"
        @click="onClickDeleteProduct(detail.product.id)" />
    </td>
  </tr>
</template>

