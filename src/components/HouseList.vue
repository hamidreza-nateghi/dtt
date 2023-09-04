<script setup>
import HouseCard from './HouseCard.vue'
import axios from '@/axios.js'

import { useQuery } from '@tanstack/vue-query'
import { computed } from 'vue'
import { storeToRefs } from 'pinia'

import { useSortStore } from '@/stores/sort'

const store = useSortStore()
const { sortBy } = storeToRefs(store)

const fetchData = async () => {
  try {
    const response = await axios.get('houses')
    return response.data
  } catch (error) {
    throw new Error('Failed to fetch data')
  }
}

const { isLoading, isError, data, error } = useQuery({
  queryKey: ['houses'],
  queryFn: fetchData
})

const sortedHouses = computed(() => {
  let sortedData = []

  if (sortBy.value === 'price') {
    sortedData = [...data.value].sort((a, b) => b.price - a.price)
  } else if (sortBy.value === 'size') {
    sortedData = [...data.value].sort((a, b) => b.size - a.size)
  } else {
    sortedData = data.value
  }

  return sortedData
})
</script>

<template>
  <span v-if="isLoading">Loading...</span>
  <span v-else-if="isError">Error: {{ error.message }}</span>
  <ul v-else>
    <li v-for="house in sortedHouses" :key="house.id">
      <HouseCard
        :bedrooms="house.rooms.bedrooms"
        :bathrooms="house.rooms.bathrooms"
        :size="house.size"
        :zipCode="house.location.zip"
        :street="house.location.street"
        :houseNumber="house.location.houseNumber"
        :price="house.price"
        :city="house.location.city"
        :image="house.image"
      />
    </li>
  </ul>
</template>

<style scoped>
li {
  margin-bottom: 1rem;
}
</style>
