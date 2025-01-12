<template>
  <div class="container">  
    <div v-for="t in tasksStore.tasks" :key="t.id" class="task">
      <h3>{{ t.nev }}</h3>  
      <p>{{ t.leiras }}</p>
      <p>{{ t.deadline }}</p>
      <p>{{ t.isFinished }}</p>    
      
      <div class="footer">
        <button @click="tasksStore.teljesitve(t.id)" v-show="!t.isFinished==true">Teljesítve</button>
        <button @click="menj(t.id)" v-show="!t.isFinished==true">Szerkesztés</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { usetaskStore } from '@/stores/tasks';
import { useRoute, useRouter } from 'vue-router';

const router = useRouter();
const tasksStore = usetaskStore();
const menj = (id)=>{
  tasksStore.findTaskToEdit(id);
  router.push(`/edit`);
}
</script>

<style scoped>
template{
  display: flex;
  flex-wrap: wrap;
}
.task{
    border: 1px solid white;
    margin: 10px;
    padding: 5px;
}
</style>
