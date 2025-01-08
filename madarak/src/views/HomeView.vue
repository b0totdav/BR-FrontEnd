<template>
  <div class="container">
    <div v-for="m in madarStore.madarak" :key="m.id" class="madar">
      <h3>{{ m.nev }}</h3>      
      <figure>
        <img :src="m.kep" :alt="m.nev">
      </figure>
      <div class="footer">
        <button @click="madarStore.szavazok(m.id)">Szavazok</button>
        <button @click="menj(m.id)">Részletek</button>
      </div>

    </div>
  </div>
</template>

<style scoped>
  .container{
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
  }
  .madar img{
    width: 250px;    
  } 
  .madar h3{
    text-align: center;
  }
  .madar>.footer{
    display: flex;
    justify-content: space-around;
  }
  .madar>figure{
    height: 200px;
    display: flex;
    align-items: center;
  }
</style>
<script setup>
import {ref} from 'vue'
import { usemadarStore } from '@/stores/madarak';
import { useRoute, useRouter } from 'vue-router';

const madarStore = usemadarStore()
const route = useRoute()
const router = useRouter()
const menj = (id)=>{
  router.push(`/reszletek/${id}`)
}
</script>


