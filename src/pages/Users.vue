<template>
  <div class="container mt-5 mb-5">
    <div v-if="loading">
      <div class="spinner-border" role="status"></div>
    </div>
    <div v-else class="row gap-3">
      <div class="card col-md-3" v-for="user in users" :key="user?.id">
        <router-link class="card-header" :to="'/users/' + user?.id">نام: {{ user.name }}</router-link>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">نام کاربری: {{ user?.username }}</li>
          <li class="list-group-item">ایمیل: {{ user?.email }}</li>
          <li class="list-group-item">موبایل: {{ user?.phone }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import axios from 'axios'
import { ref } from 'vue'

interface User {
  id: number
  name: string
  username: string
  email: string
  phone: string
}

const users = ref<User[]>([])
const loading = ref<boolean>(true)

const getUsers = async (): Promise<void> => {
  try {
    const response = await axios.get<User[]>('https://jsonplaceholder.typicode.com/users')
    users.value = response.data
    loading.value = false
  } catch (error) {
    console.log(error)
  }
}

getUsers()
</script>

<style scoped></style>
