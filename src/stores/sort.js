import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useSortStore = defineStore('sort', () => {
  const sortBy = ref('price')

  function handleSort(key) {
    sortBy.value = key
  }

  return { sortBy, handleSort }
})
