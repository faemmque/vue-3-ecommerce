<script lang="ts">
import { useCartStore } from '@/stores/cart';
import ShoppingCartItem from '@/components/cart/ShoppingCartItem.vue';
import { mapState } from 'pinia';

export default{
  components:{
    ShoppingCartItem,
  },
  computed:{
    ...mapState(useCartStore,{
      details: 'details',
      showProducts: state => state.details.length > 0 ? true : false
    }),
  },
}
</script>

<template>
  <v-card>
    <v-card-title>Productos agreados al carrito:</v-card-title>
    <v-card-text>
      <v-row>
        <v-col>
          <v-table v-if="showProducts">
            <thead>
              <tr>
                <th class="font-weight-black">Producto</th>
                <th class="font-weight-black">Precio</th>
                <th class="font-weight-black">Cantidad</th>
                <th class="font-weight-black">Importe</th>
                <th class="font-weight-black"></th>
              </tr>
            </thead>
            <tbody>
              <ShoppingCartItem v-for="detail in details" :detail="detail"  :key="detail.product.id" />
            </tbody>
          </v-table>
          <div v-else>
            <p class="font-weight-black">Tu carrito está vacío</p>
            <p>Aún no has agregado productos.</p>
            <p>Explora nuestro catálogo y encuentra lo que estás buscando.</p>
            <p>👉 <RouterLink to="/">Haz clic aquí para comenzar a comprar</RouterLink></p>
          </div>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>
