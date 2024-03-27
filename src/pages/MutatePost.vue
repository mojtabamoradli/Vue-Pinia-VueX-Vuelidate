<template>
  <div class="container mt-5 mb-5">
    <div class="col-md-5">
      <div>
        <h3>
          <span v-if="!route.params.id">ایجاد پست جدید</span>
          <span v-else>
            <span>ویرایش پست</span>
            <span>{{ route.params.id }}</span>
          </span>
        </h3>
      </div>

      <div v-if="loading && route.params.id">
        <div class="spinner-border" role="status"></div>
      </div>
      <div v-else class="row gap-3">
        <form @submit.prevent="submit">
          <div class="form-group">
            <label for="title">عنوان </label>
            <input type="text" :class="{ 'form-control': true, error: form.titleError }" id="title" v-model.lazy.trim="form.title" />
            <small v-if="form.titleError" id="titleError" class="form-text errorText">عنوانی وارد کنید.</small>
          </div>
          <div class="form-group mt-2">
            <label for="body">متن </label>
            <textarea type="text" :class="{ 'form-control': true, error: form.bodyError }" id="body" v-model.lazy.trim="form.body" />
            <small v-if="form.bodyError" id="bodyError" class="form-text errorText">متنی وارد کنید.</small>
          </div>

          <button type="submit" :disabled="createLoading" class="btn btn-primary mt-2 ms-2">
            <div v-if="createLoading">
              <div class="spinner-border spinner-border-sm" role="status"></div>
            </div>
            <span v-else> {{ route.params.id ? 'ویرایش' : 'ایجاد' }}</span>
          </button>
          <button @click="router.push('/posts')" class="btn btn-light mt-2">انصراف</button>
        </form>
        <div v-if="alert.visible" :class="{ alert: true, 'alert-success': alert.type === 'success' }" role="alert">{{ alert.message }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import axios from 'axios'
import { reactive, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
const router = useRouter()
const route = useRoute()

const loading = ref(true)
const form = reactive({ title: '', body: '', titleError: false, bodyError: false })

const createLoading = ref(false)
const getPost = async () => {
  try {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`)
    form.title = response.data.title
    form.body = response.data.body
    loading.value = false
  } catch (error) {
    console.log(error)
    loading.value = false
  }
}

if (route.params.id) {
  getPost()
}

const alert = ref({
  visible: false,
  type: 'success',
  message: ''
})

const submit = async () => {
  if (!form.title) {
    form.titleError = true
  }
  if (!form.body) {
    form.bodyError = true
  }

  if (form.body && form.title && !route.params.id) {
    createLoading.value = true
    form.titleError = false
    form.bodyError = false

    try {
      const response = await axios.post('https://jsonplaceholder.typicode.com/posts', {
        title: form.title,
        body: form.body,
        userId: 1
      })
      createLoading.value = false
      alert.value.visible = true
      alert.value.type = 'success'
      alert.value.message = 'پست با موفقیت ایجاد شد.'
    } catch (error) {
      console.log(error)
      createLoading.value = false
    }
  }
  if (form.body && form.title && route.params.id) {
    createLoading.value = true
    form.titleError = false
    form.bodyError = false

    try {
      const response = await axios.put(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`, {
        id: route.params.id,
        title: form.title,
        body: form.body,
        userId: 1
      })
      createLoading.value = false
      alert.value.visible = true
      alert.value.type = 'success'
      alert.value.message = 'پست با موفقیت ویراش شد.'
    } catch (error) {
      console.log(error)
      createLoading.value = false
    }
  }
}
</script>

<style scoped>
.error {
  border: 1px solid red;
}
.errorText {
  color: red;
}
</style>
