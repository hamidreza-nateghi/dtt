<script setup></script>

<template>
  <article>
    <img
      class="house-image"
      src="@/assets/img_placeholder_house@3x.png"
      alt="A House"
      width="160"
      height="160"
    />
    <div class="flex flex-col justify-evenly">
      <h2>Stokvisstraat 132</h2>
      <p class="info">€ 500,000</p>
      <p class="info address">1011AA Amsterdam</p>
      <div class="flex gap-4">
        <figure>
          <img class="icon" src="@/assets/ic_bed@3x.png" alt="Bed Icon" width="63" height="48" />
          <figcaption>1</figcaption>
        </figure>
        <figure>
          <img class="icon" src="@/assets/ic_bath@3x.png" alt="Bath Icon" width="63" height="60" />
          <figcaption>1</figcaption>
        </figure>
        <figure>
          <img class="icon" src="@/assets/ic_size@3x.png" alt="Size Icon" width="63" height="63" />
          <figcaption>120 m2</figcaption>
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
