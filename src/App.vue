<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>
    <div class="wrapper">
      <img alt="DTT logo" class="logo" src="@/assets/img_logo_dtt@3x.png" width="130" height="44" />

      <!-- <HelloWorld msg="You did it!" /> -->

      <nav>
        <RouterLink to="/">Houses</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <div class="container">
    <RouterView />
  </div>
</template>

<style scoped>
.container {
  margin: auto;
  max-width: 1024px;
}

header {
  line-height: 1.5;
  width: 100vw;
  background-color: var(--color-vtt-background2);
  z-index: 1000;
}

.logo {
  display: block;
  margin-right: 3rem;
}

nav {
  /* width: 100%; */
  font-size: 12px;
  /* text-align: center; */
  /* margin-top: 2rem; */
}

nav a.router-link-exact-active {
  color: var(--color-vtt-text-primary);
  font-weight: bold;
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1.5rem;
  /* border-left: 1px solid var(--color-border); */
}

nav a:first-of-type {
  border: 0;
}

header .wrapper {
  display: flex;
  margin: auto;
  align-items: center;
  width: 1024px;
}

@media (min-width: 1024px) {
  header {
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
    padding: 8px 0;
    position: fixed;
    top: 0;
    left: 0;
    /* place-items: center; */
    /* padding-right: calc(var(--section-gap) / 2); */
  }

  .logo {
    /* margin: 0 2rem 0 0; */
  }

  header .wrapper {
    /* display: flex; */
    /* place-items: flex-start;
    flex-wrap: wrap; */
  }

  nav {
    /* text-align: left; */
    /* margin-left: -1rem; */
    font-size: 1rem;

    padding: 1rem 0;
    /* margin-top: 1rem; */
  }
}
</style>
