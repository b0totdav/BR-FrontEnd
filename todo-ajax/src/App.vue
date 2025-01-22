<script setup>
  import axios from "axios";
  import {ref, onMounted} from 'vue'
  const goods = ref([])

  onMounted(() =>{
    axios.get("http://localhost:3000/goods")
    .then(resp => {
      console.log(resp.data)
      goods.value = resp.data
  })
  })
</script>

<template>
  <h1 class="text-center">Vásárolandó termékek:</h1>  
  <div class="container">
    <div v-for="good in goods" :key="good.id">
    <h2>{{ good.good }}</h2>
    <p>{{ good.price }} Ft</p>
  </div>
  </div>
</template>

<style scoped>
 .container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .container>div{
    margin: 10px;
    width: 300px;
    height: 200px;
    background-color: #f2f2f2;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: transform 0.3s;
  }
</style>
