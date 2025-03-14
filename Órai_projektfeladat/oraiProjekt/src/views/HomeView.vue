<template>
    <div class="container">
      <h1>Műszaki vizsgáztatás</h1>
      <table id="tabla">
        <tr>
          <th></th>
          <th>Hétfő</th>
          <th>Kedd</th>
          <th>Szerda</th>
          <th>Csütörtök</th>
          <th>Péntek</th>
        </tr>
        <tr v-for="hour in hours" :key="hour">
          <td>{{ hour }}:00</td>
          <td v-for="day in days" :key="day">
            <span v-if="getDateValue(`${day}${hour}`)">
              {{ getDateValue(`${day}${hour}`) }}
            </span>
            <router-link v-else :to="`/reserve/${day}${hour}`">
              <button class="btn btn-outline-danger">Foglalás</button>
            </router-link>
          </td>
        </tr>
      </table>
    </div>
  </template>
  
  <script setup>
  import { useDateStore } from '../stores/dates.js'
  import { onMounted, ref } from 'vue'
  
  const dateStore = useDateStore()
  const days = ref(["h", "k", "sz", "cs", "p"])
  const hours = ref([8, 9, 10, 11, 12, 13, 14, 15])
  
  onMounted(() => {
    dateStore.getDates() 
  })
  
  const getDateValue = (id) => {
    const date = dateStore.dates.find(d => d.dateId === id)
    return date ? date.title : null
  }
  </script>
  
  

<style scoped>
.container{
  align-self: center;
  justify-content: center;
  margin-top: 5%;
}
h1{
  text-align: center;
    justify-self: center;
}
table{
    border: 1px solid black;
    box-shadow: 0px 8px 12px rgba(0, 0, 0, 0.5);
    text-align: center;
    justify-self: center;
}
td{
    border: solid 1px black;
    padding: 10px;
    width: 200px;
    height: 100;
    border-collapse: collapse;
}
th{
  height: 100;
  font-weight: bolder;
  padding: 10px;
}
tr:hover{
    background-color: #9ff2fd7c;
}
td:hover{
    background-color: #fcadad7c;
}
</style>