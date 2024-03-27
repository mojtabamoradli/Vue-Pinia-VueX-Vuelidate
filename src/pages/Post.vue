<template>
  <div class="container mt-5">
    <div v-if="loading">
      <div class="spinner-border" role="status"></div>
    </div>
    <div v-else class="row gap-3">
      <div class="card col-md-3">
        <p class="card-header">{{ post?.title }} ({{ post?.id }})</p>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">{{ post?.body }}</li>
        </ul>
        <div class="card-footer">
          <button class="btn btn-sm ms-2 btn-danger" @click="deletePost">
            <div v-if="deleteLoading">
              <div class="spinner-border spinner-border-sm" role="status"></div>
            </div>
            <span v-else> حذف </span>
          </button>
          <button class="btn btn-sm btn-dark" @click="router.push('/posts/edit/' + post?.id)">ویرایش</button>
        </div>
      </div>
    </div>
    <div v-if="alert.visible" :class="{ alert: true, 'alert-success': alert.type === 'success', 'mt-2': true }" role="alert">{{ alert.message }}</div>
  </div>
</template>

<script setup lang="ts">
import axios from 'axios'
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

interface Post {
  id: number
  title: string
  body: string
}

interface Alert {
  visible: boolean
  type: 'success' | 'error'
  message: string
}

const route = useRoute()
const router = useRouter()

const post = ref<Post | null>(null)
const loading = ref<boolean>(true)
const deleteLoading = ref<boolean>(false)

const alert = ref<Alert>({
  visible: false,
  type: 'success',
  message: ''
})

const getPost = async () => {
  try {
    const response = await axios.get<Post>(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`)
    post.value = response.data
    loading.value = false
  } catch (error: any) {
    console.log(error)
    if (error.response && error.response.status === 404) {
      router.push('/NotFound')
    }
  }
}

getPost()

const deletePost = async () => {
  deleteLoading.value = true

  try {
    const response = await axios.delete(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`)
    deleteLoading.value = false
    alert.value.visible = true
    alert.value.type = 'success'
    alert.value.message = 'پست با موفقیت حذف شد.'
  } catch (error: any) {
    console.log(error)
    deleteLoading.value = false
  }
}
</script>

<style scoped></style>
