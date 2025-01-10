<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  
      <nav>
        <RouterLink to="/">Feladatok</RouterLink>
        <RouterLink to="/new">Új feladat</RouterLink>
      </nav>
  <RouterView />
</template>

<style scoped>

</style>
