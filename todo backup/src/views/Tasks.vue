<template>
  <div class="container">  
    <div v-for="t in tasksStore.tasks" :key="t.id" class="task">
      <h3>{{ t.nev }}</h3>  
      <p>{{ t.leiras }}</p>
      <p>{{ t.deadline }}</p>
      <p>{{ t.isFinished }}</p>    
      
      <div class="footer">
        <button @click="tasksStore.teljesitve(t.id)">Teljesítve</button>
        <button @click="menj(t.id)">Szerkesztés</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { usetaskStore } from '@/stores/tasks';
import { useRoute, useRouter } from 'vue-router';

const tasksStore = usetaskStore();
const menj = (id)=>{
  router.push(`/edit/${id}`)
}
</script>

<style scoped>
.task{
    border: 1px solid white;
    margin: 10px;
}
</style>
