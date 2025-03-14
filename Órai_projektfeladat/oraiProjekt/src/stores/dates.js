import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useDateStore = defineStore('dates', () => {
  const dates = ref([])


  const getDates = () => {
    axios.get('http://localhost:3000/reservedDates')
      .then(res => dates.value = res.data)
  }


  function findDateToReserve(id) {
    return dates.value.find(date => date.dateId === id)
  }

  async function reserveDate(id, title) {
    const existing = findDateToReserve(id)
    if (!existing) {
      const newReservation = { dateId: id, title }
      try {
        await axios.post('http://localhost:3000/reservedDates', newReservation)
        dates.value.push(newReservation)
      } catch (error) {
        console.error("Hiba történt:", error)
      }
    } else {
      console.log("Ez az időpont már le van foglalva")
    }
  }

  return { dates, getDates, findDateToReserve, reserveDate }
})
