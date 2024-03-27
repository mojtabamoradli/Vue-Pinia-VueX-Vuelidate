<template>
  <div class="d-flex flex-column min-vh-100">
    <Header />
    <router-view class="box flex-grow-1"></router-view>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Header from './components/layout/Header.vue'
import Footer from './components/layout/Footer.vue'
</script>

<style scoped></style>
