<template>
    <div class="container">
      <h2>Időpont foglalása</h2>
      <form @submit.prevent="submitReservation">
        <p>Foglalás erre az időpontra: <strong>{{ dateId }}</strong></p>
        
        <label for="name">Név:</label>
        <input type="text" id="name" v-model="name" required />
  
        <label for="phone">Telefonszám:</label>
        <input type="tel" id="phone" v-model="phone" required />
  
        <button class="btn btn-outline-success" type="submit">Foglalás</button>
      </form>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { useRoute, useRouter } from 'vue-router'
  import { useDateStore } from '../stores/dates.js'
import { useToast } from 'vue-toastification'
  
  const route = useRoute()
  const router = useRouter()
  const dateStore = useDateStore()
  const toast = useToast()
  
  const dateId = ref(route.params.dateId)
  const name = ref("")
  const phone = ref("")
  
  const submitReservation = () => {
    if (name.value && phone.value) {
      const reservationTitle = `${name.value} - ${phone.value}`
      dateStore.reserveDate(dateId.value, reservationTitle)
      toast.success("Sikeres foglalás")
      router.push("/")
    }
    else{
      toast.error("Minden mezőt ki kell tölteni")
    }
  }
  </script>
  
  <style scoped>
  .container {
    max-width: 400px;
    margin: auto;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  }
  button{
    font-weight: bolder;
  }
  input {
    display: block;
    width: 100%;
    margin-bottom: 10px;
    padding: 8px;
  }
  </style>