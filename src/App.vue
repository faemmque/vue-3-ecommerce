<script lang="ts">
  import { RouterLink, RouterView } from 'vue-router'
</script>

<template>

  <v-app id="inspire">
    <v-app-bar flat color="#f4eed4">
      <v-container class="mx-auto d-flex align-center justify-center">
        <v-avatar
          class="me-4 "
          color="#b94866"
          size="32"
        ></v-avatar>

        <RouterLink to="/">
          <v-btn variant="text" color="#b94866"> Home </v-btn>
        </RouterLink>
        <RouterLink to="/cart">
          <v-btn variant="text" color="#b94866"> Cart </v-btn>
        </RouterLink>
        <RouterLink to="/about">
          <v-btn variant="text" color="#b94866"> About </v-btn>
        </RouterLink>

        <v-spacer></v-spacer>

        <v-responsive max-width="160">
          <v-text-field
            density="compact"
            label="Search"
            rounded="lg"
            variant="solo-filled"
            flat
            hide-details
            single-line
          ></v-text-field>
        </v-responsive>
      </v-container>
    </v-app-bar>

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



