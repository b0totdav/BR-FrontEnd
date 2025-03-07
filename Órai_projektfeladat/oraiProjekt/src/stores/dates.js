import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useDateStore = defineStore('date', () => {
  const date = ref({})

  const getDates = () =>{
    axios.get('http://localhost:3000/reservedDates')
    .then(res => res.json())
    .then(data => date.value = data)
  }
  return { date, getDates}
})
