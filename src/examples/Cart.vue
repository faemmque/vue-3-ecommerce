
<script lang="ts">
import type { PropType } from 'vue';
import type { ICartDetail } from './types';

  export default{
    props:{
      details:{
        type: Object as PropType<Array<ICartDetail>>,
        required: true
      }
    }
  }

</script>

<template>
  <p>Productos agreados al carrito:</p>
  <ul>
    <li v-for="detail in details">
      <p>Producto: {{ detail.productId }} (Qty: {{ detail.quantity }})</p>
    </li>
  </ul>
</template>
