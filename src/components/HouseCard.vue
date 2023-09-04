<script setup>
defineProps({
  image: String,
  price: Number,
  bedrooms: Number,
  bathrooms: Number,
  size: Number,
  street: String,
  houseNumber: Number,
  zipCode: String,
  city: String
})
</script>

<template>
  <article>
    <img class="house-image" :src="image" alt="A House" width="160" height="160" />
    <div class="flex flex-col justify-evenly">
      <h2>{{ street }} {{ houseNumber }}</h2>
      <p class="info">€ {{ price.toLocaleString('nl-NL') }}</p>
      <p class="info address">{{ zipCode }} {{ city }}</p>
      <div class="flex gap-4">
        <figure>
          <img class="icon" src="@/assets/ic_bed@3x.png" alt="Bed Icon" width="63" height="48" />
          <figcaption>{{ bedrooms }}</figcaption>
        </figure>
        <figure>
          <img class="icon" src="@/assets/ic_bath@3x.png" alt="Bath Icon" width="63" height="60" />
          <figcaption>{{ bathrooms }}</figcaption>
        </figure>
        <figure>
          <img class="icon" src="@/assets/ic_size@3x.png" alt="Size Icon" width="63" height="63" />
          <figcaption>{{ size }} m2</figcaption>
        </figure>
      </div>
    </div>
  </article>
</template>

<style scoped>
figure {
  display: flex;
}

article {
  display: flex;
  border-radius: 0.5rem;
  background-color: var(--color-vtt-background2);
  padding: 1rem;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
}

.icon {
  max-width: 24px;
  height: auto;
  object-fit: contain;
  margin-right: 8px;
}

.house-image {
  border-radius: 0.5rem;
  object-fit: cover;
  margin-right: 1rem;
}

.info {
  color: var(--color-vtt-text-secondary);
  font-weight: 600;
}

.address {
  color: var(--color-vtt-tertiary2);
}
</style>
