
<script lang="ts">
  import type { PropType } from 'vue';
  import type { IProduct } from './types'

  export default{
    props: {
      product: {
        type: Object as PropType<IProduct>,
        required: true
      }
    },
    emits: ['addProduct'],
    methods: {
      onAddButtonClick(){
        // console.log("Agregando carrito " + this.product.id)
        this.$emit("addProduct")
      }
    }
  }

</script>

<template>



    <v-card color="surface-variant" >

      <v-img
        src="https://cdn.pixabay.com/photo/2017/12/15/19/07/ecommerce-3021581_1280.jpg"
        height="200px"
        cover />

      <v-card-title>{{ product.name }}</v-card-title>
      <v-card-text>Precio: ${{ product.price }}</v-card-text>

      <v-card-actions>
        <v-btn @click="onAddButtonClick" color="orange-lighten-2">
          Agregar al carrito
        </v-btn>
      </v-card-actions>

    </v-card>

</template>

