<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  
      <nav>
        <div>
          <RouterLink to="/">Feladatok</RouterLink>
        </div>
        <RouterLink to="/new">Új feladat</RouterLink>
      </nav>
  <RouterView />
</template>

<style scoped>

</style>
