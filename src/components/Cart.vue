
<script lang="ts">
import { useCartStore } from '@/stores/cart';
import { RouterLink } from 'vue-router';

export default{
  computed:{
    cartStore(){
      return useCartStore();
    },
    details(){
      return this.cartStore.details;
    },
    showProducts(){
      return this.details.length > 0 ? true : false
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
          <v-table v-if="showProducts">
            <thead>
              <tr>
                <th>Producto</th>
                <th>Cantidad</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="detail in details">
                <td>{{ detail.productId }}</td>
                <td>{{ detail.quantity }}</td>
                <td>
                  <v-btn
                    class="mr-2"
                    icon="mdi-plus"
                    size="x-small"
                    variant="flat"
                    @click="onClickIncrementQuantity(detail.productId)" />
                  <v-btn
                    class="mr-2"
                    icon="mdi-minus"
                    size="x-small"
                    variant="flat"
                    @click="onClickDecrementQuantity(detail.productId)" />
                  <v-btn
                    class="mr-2"
                    icon="mdi-trash-can"
                    size="x-small"
                    variant="flat"
                    @click="onClickDeleteProduct(detail.productId)" />
                </td>
              </tr>
            </tbody>
          </v-table>
          <p v-else>
            Aun no has agregado items a tu carrito de compras.
            Hax <RouterLink to="/">clic aqui</RouterLink> para ver los productos disponibles.
          </p>
        </v-col>
      </v-row>

    </v-card-text>
  </v-card>

</template>
