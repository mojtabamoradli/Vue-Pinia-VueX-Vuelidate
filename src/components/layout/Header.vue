<template>
  <div>
    <nav class="navbar navbar-expand-lg bg-body-tertiary font-Post_Bold">
      <div class="container-fluid">
        <button class="navbar-brand btn btn-link" @click="router.push('/')">پروژه تمرینی ویو</button>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link :class="{ 'nav-link': true, active: route.path === '/' }" aria-current="page" to="/">خانه</router-link>
            </li>
            <li class="nav-item">
              <router-link  :class="{ 'nav-link': true, active: route.path === '/users' }" to="/users">کاربران</router-link>
            </li>
            <li class="nav-item">
              <router-link  :class="{ 'nav-link': true, active: route.path === '/posts' }" to="/posts">پست‌ها</router-link>
            </li>
          </ul>
          <form class="d-flex" role="search" @submit.prevent="doSearch">
            <input class="form-control me-2" type="search" v-model="searchedTextRef" placeholder="عنوان پست..." aria-label="Search" />
            <button :disabled="!searchedTextRef" class="btn btn-outline-success me-2" type="submit">جست‌وجو...</button>
          </form>
        </div>
      </div>
    </nav>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const searchedTextRef = ref()
const router = useRouter()
const route = useRoute()

const doSearch = () => {

  const searchedText: string = searchedTextRef.value
  console.log(searchedText)
  router.push("/Search/" + searchedText)
}
</script>

<style scoped>
.active {
  color: #000000;
}
</style>
