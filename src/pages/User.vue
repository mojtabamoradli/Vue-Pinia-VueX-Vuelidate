<template>
  <div class="container mt-5">
    <div v-if="loading">
      <div class="spinner-border" role="status"></div>
    </div>
    <div v-else class="row gap-3">
      <div class="card col-md-3">
        <p class="card-header">نام: {{ user?.name }} ({{ user?.id }})</p>
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
import { useRoute, useRouter } from 'vue-router'

interface User {
  id: number
  name: string
  username: string
  email: string
  phone: string
}

const route = useRoute()
const router = useRouter()

const user = ref<User | null>(null)
const loading = ref<boolean>(true)

const getUser = async () => {
  try {
    const response = await axios.get<User>(`https://jsonplaceholder.typicode.com/users/${route.params.id}`)
    user.value = response.data
    loading.value = false
  } catch (error: any) {
    console.log(error)
    if (error.response && error.response.status === 404) {
      router.push('/NotFound')
    }
  }
}

getUser()
</script>

<style scoped></style>
