
<script lang="ts">
  import type { PropType } from 'vue';
  import type { IProduct } from './IProduct'

  export default{
    props: {
      product: {
        type: Object as PropType<IProduct>,
        required: true
      }
    },
    // emits: ['addProduct'],
    methods: {
      onAddButtonClick(){
        // console.log("Agregando carrito " + this.product.id)
        this.$emit("addProduct")
      }
    }
  }

</script>

<template>
  <div>
    <p> Nombre: {{ product.name }}</p>
    <p> Precio: {{ product.price }}</p>
    <button @click="onAddButtonClick">
      Agregar al carrito
    </button>
    <hr />
  </div>
</template>

