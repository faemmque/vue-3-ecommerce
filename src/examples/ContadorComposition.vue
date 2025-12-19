
<script setup lang="ts">
  import { onMounted, ref } from 'vue'

  const count = ref(0);

  const increase = (): void => {
    count.value += 1;
  }

  const decrease = (): void => {
    count.value -= 1;
  }

  onMounted((): void => {
    console.log("El valor inicial de nuestro contador es: " + count.value)
  });

</script>

<template>
  <p>Tienes que llegar a 100 clicks</p>

  <h1>Contador: {{ count }}</h1>

  <button @click="increase">
    Incrementar contador
  </button>
  <button @click="decrease">
    Decrementar contador
  </button>

  <p v-if="count < 10">Vamos tu puedes</p>
  <p v-else>Ya te falta muy poco...</p>
</template>
