import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useDateStore = defineStore('date', () => {
  const date = ref({})
  return { date}
})
