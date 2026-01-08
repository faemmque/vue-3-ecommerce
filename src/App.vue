<script lang="ts">
  import { RouterView } from 'vue-router'
  import TopBar from '@/components/TopBar.vue'

  export default{
    components:{
      TopBar
    }
  }

</script>

<template>

  <v-app id="inspire">
    <TopBar />
    <v-main class="bg-grey-lighten-3">
      <v-container>
        <v-row>
          <v-col cols="12">
            <RouterView />
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>

</template>



