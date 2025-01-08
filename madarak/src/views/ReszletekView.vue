<template>
  <!-- <p>ID: {{ route.params.id }}</p> -->
  <div class="madar">
    <div>
      <h3>{{ madar.nev }}</h3>
      <svg @click="leptet('-1')" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M400-80 0-480l400-400 71 71-329 329 329 329-71 71Z"/></svg>
      <img :src="madar.kep" :alt="madar.kep" title="madar.nev">
      <svg @click="leptet('1')" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z"/></svg>
      <p>Szárny fesztávolság: {{ madar.fesztav }}</p>
      <p>Ragadozó: {{ madar.ragadozo ? "igen" : "nem" }}</p>
      <p>Képes-e repülni: {{ madar.ropkepes ? "igen" : "nem"}}</p>

    </div>
  </div>
</template>
<script setup>
    import { ref } from 'vue';
    import { useRoute, useRouter } from 'vue-router';
    import { usemadarStore } from '@/stores/madarak';
    
    const route = useRoute()
    const router = useRouter()
    const madarakStore = usemadarStore()
    const madar = ref(madarakStore.madarak.find(m => m.id == route.params.id))
   
    const leptet = (irany) =>{
      
      let meret = madarakStore.madarak.length; //Hány db madár?
      let ujId = Number(madar.value.id) + Number(irany);
      if (ujId > meret) {
        ujId = 1
      } else if (ujId < 1){
        ujId = meret
      }     
      router.push("/reszletek/"+ ujId)
      madar.value = madarakStore.madarak.find(m => m.id == ujId)      
    }
</script>

<style scoped>
.madar{
  width: 33.33%;
  margin: 0 auto;
}
img{
  width: 80%;
}
p, h3{
  text-align: center;
}
</style>
