import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useDateStore = defineStore('dates', () => {
  const dates = ref([])

  const getDates = () =>{
    axios.get('http://localhost:3000/reservedDates')
    .then(res =>dates.value = res.data)
  }
  return { dates, getDates}
})
