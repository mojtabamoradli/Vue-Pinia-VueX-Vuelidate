<template>
  <div class="container mt-5 mb-5">
    <div v-if="loading">
      <div class="spinner-border" role="status"></div>
    </div>
    <div v-else class="row gap-3">
      <div>
        <button class="btn btn-sm btn-dark" @click="router.push('/posts/create')">پست جدید</button>
      </div>
      <div class="card col-md-3" v-for="post in posts" :key="post?.id">
        <router-link class="card-header" :to="'/posts/' + post.id">{{ post?.title }} </router-link>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">{{ post?.body }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useQuery } from '@tanstack/vue-query'
import axios from 'axios'
import { useRouter } from 'vue-router'

interface Post {
  id: number
  title: string
  body: string
}

const router = useRouter()
const posts = ref<Post[]>([])
const loading = ref<boolean>(true)

const query = useQuery({
  queryKey: ['posts'],
  queryFn: async () => {
    const response = await axios.get<Post[]>('https://jsonplaceholder.typicode.com/posts')
    posts.value = response.data
    loading.value = false
  }
})
</script>

<style scoped></style>
