
<script lang="ts">
import { useCartStore } from '@/stores/cart';

export default{
  computed:{
    cartStore(){
      return useCartStore();
    },
    details(){
      return this.cartStore.details;
    }
  },
  methods:{
    onClickDecrementQuantity(productId: number){
      this.cartStore.onDecrement(productId);
    },
    onClickIncrementQuantity(productId: number){
      this.cartStore.onIncrement(productId);
    },
    onClickDeleteProduct(productId: number){
      this.cartStore.onDelete(productId);
    },
  }
}

</script>

<template>
  <v-card>
    <v-card-title>Productos agreados al carrito:</v-card-title>
    <v-card-text>
      <v-row>
        <v-col cols="2"></v-col>
        <v-col cols="8">
          <v-table>
            <thead>
              <tr>
                <th>ProductId</th>
                <th>Quantity</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="detail in details">
                <td>{{ detail.productId }}</td>
                <td>{{ detail.quantity }}</td>
                <td>
                  <v-btn variant="flat" @click="onClickIncrementQuantity(detail.productId)"> + </v-btn> &nbsp;
                  <v-btn variant="flat" @click="onClickDecrementQuantity(detail.productId)"> - </v-btn> &nbsp;
                  <v-btn variant="flat" @click="onClickDeleteProduct(detail.productId)"> Eliminar </v-btn>
                </td>
              </tr>
            </tbody>
          </v-table>
        </v-col>
      </v-row>

    </v-card-text>
  </v-card>

</template>
