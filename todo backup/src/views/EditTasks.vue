<template>
  <table>
    <tr>
      <td><label for="name">Feladat neve: </label></td>
      <td><input type="text" id="name" v-model="tasksStore.taskToEdit.nev"></td>
    </tr>
    <tr>
      <td><label for="desc">Leírás: </label></td>
      <td><textarea id="desc" name="desc" v-model="tasksStore.taskToEdit.leiras"></textarea></td>
    </tr>
    <tr>
      <td><label for="deadl">Határidő: </label></td>
      <td><input type="date" name="dead" id="dead" v-model="tasksStore.taskToEdit.deadline"></td>
    </tr>
  </table>       
    <div></div>
    <button @click="save()">Mentés</button>
</template>
  
<script setup>
import { usetaskStore } from '@/stores/tasks.js';
import { useRouter } from 'vue-router'
  const tasksStore=usetaskStore()
  const Router=useRouter()

const save= ()=>{
  tasksStore.taskToEdit.nev=tasksStore.taskToEdit.nev
  tasksStore.taskToEdit.leiras=tasksStore.taskToEdit.leiras
  tasksStore.taskToEdit.deadline=tasksStore.taskToEdit.deadline
  Router.push('/tasks')
}
</script>
  
<style scoped>
  
</style>