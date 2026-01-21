<script lang="ts">
import { useCartStore } from '@/stores/cart';
import { formatCurrency } from '@/utils/formatters';
import { mapState } from 'pinia';

export default {
  computed:{
    ...mapState(useCartStore,{
      getCartTotal: 'getCartTotal',
      whatsappLink: 'whatsappLink',
      isDisabled: state => state.cartItemsCount > 0 ? false : true
    })
  },
  methods:{
    formatCurrency,
  }
}
</script>

<template>
  <v-card>
    <v-card-title>
      Resumen de la compra
    </v-card-title>
    <v-card-text>
      <table>
        <tbody>
          <tr>
            <td class="font-weight-black">Total a pagar:</td>
            <td>{{ formatCurrency(getCartTotal) }}</td>
          </tr>
        </tbody>
      </table>
    </v-card-text>
    <v-btn :href="whatsappLink" target="_blank" prepend-icon="mdi-send" block :disabled="isDisabled">Realizar pedido</v-btn>
  </v-card>
</template>

