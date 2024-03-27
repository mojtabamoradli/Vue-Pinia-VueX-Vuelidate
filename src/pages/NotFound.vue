<template>
  <div class="container mt-5 mb-5 text">
    <p>صفحه یافت نشد!</p>
    <button @click="reduce">reduce price by one</button>
    <button @click="reduceByDelay">reduce price by one by delay</button>
  </div>

  <div v-for="item in dummyData" :key="item.price">
    <p>{{ item.price }}</p>
  </div>

  <div v-for="item in alteredData" :key="item.price">
    <p>{{ item.price }}</p>
  </div>

  <div v-for="item in tasks" :key="item.id">
    <p>{{ item.title }}</p>
  </div>

  <div v-for="item in taskStore.favs" :key="item.id">
    <p>{{ item.title }}</p>
  </div>

  <button @click="addATaskToTasks">add a task to tasks</button>
</template>

<script setup lang="ts">
import vuexStore from '../vuex/store'
import { useTaskStore } from '../pinia/task/store'
import { storeToRefs } from 'pinia'

const dummyData = vuexStore.state.dummyData
const alteredData = vuexStore.getters.add50ToPrice

const reduce = () => {
  vuexStore.commit('reducePrice', 1)
}

const reduceByDelay = () => {
  vuexStore.dispatch('reducePriceByDelay', 1)
}

// pinia

const taskStore = useTaskStore()
const { tasks } = storeToRefs(taskStore)
// const tasks = taskStore.tasks

const addATaskToTasks = () => {
  taskStore.addTask({ id: 3, title: 'title three', isFav: true })
}
</script>

<style></style>
