<script setup>
import { storeToRefs } from 'pinia'

import { useSortStore } from '@/stores/sort'

const store = useSortStore()
const { sortBy } = storeToRefs(store)
const { handleSort } = store
</script>

<template>
  <button @click="handleSort('price')" class="left" :class="{ active: sortBy === 'price' }">
    Price
  </button>
  <button @click="handleSort('size')" class="right" :class="{ active: sortBy === 'size' }">
    Size
  </button>
</template>

<style scoped>
.left,
.right {
  color: var(--color-vtt-background2);
  background: var(--color-vtt-tertiary2);
  padding: 12px 4rem;
  border: none;
  border-radius: none;
}

.left {
  border-top-left-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;
}

.right {
  border-top-right-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
}

.active {
  background: var(--color-vtt-primary);
}
</style>
