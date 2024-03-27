<template>
    <form @submit.prevent="submitForm">
      <input v-model="name" />
      <p v-if="$v.$error">Name is required.</p>
      <p v-if="$v.$error">Name must be at least 3 characters.</p>
      <Button type="submit">Submit</Button>
    </form>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useVuelidate } from '@vuelidate/core'
import { required, minLength } from '@vuelidate/validators'

const name = ref('')
const rules = computed(() => ({
  name: {
    required,
    minLength: minLength(3)
  }
}))

const $v = useVuelidate(rules, { name })

const submitForm = () => {
  const result = $v.value.$validate()
  result
    .then(res => {
      if (res) {
        alert('Form submitted.')
      }
    })
    .catch(err => {
      console.log(err)
    })
}
</script>
