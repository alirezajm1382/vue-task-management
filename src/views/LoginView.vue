<template>
  <div
    class="card w-96 bg-base-200 card-xl border-1 border-gray-200 dark:border-gray-700 shadow-xl"
  >
    <div class="card-body">
      <h2 class="text-2xl font-semibold text-center">Log in to your account</h2>
      <fieldset class="fieldset">
        <legend class="fieldset-legend">Email Address</legend>
        <input type="text" class="input" placeholder="user@email.com" v-model="form.email" />
      </fieldset>
      <fieldset class="fieldset">
        <legend class="fieldset-legend">Password</legend>
        <input type="password" class="input" placeholder="Enter here" v-model="form.password" />
      </fieldset>
      <p class="text-error text-sm text-center" v-if="error">{{ error }}</p>
      <div class="justify-end card-actions pt-4">
        <button
          :class="[{ 'btn btn-primary w-full': true }, { 'btn-disabled': globalStore.isLoading }]"
          @click="handleLogin"
        >
          Log In
        </button>
        <p class="text-sm text-center mt-5">
          Don't have an account?
          <span class="text-primary"
            ><RouterLink :to="{ name: 'Register' }">Register</RouterLink></span
          >
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import useAuth from '../composables/useAuth'
import { useRouter } from 'vue-router'
import useGlobalStore from '@/stores/global'

const auth = useAuth()
const router = useRouter()
const globalStore = useGlobalStore()
const error = ref<string | null>(null)

const form = reactive({
  email: '',
  password: '',
})

const handleLogin = async () => {
  await auth
    .login(form.email, form.password)
    .then(() => {
      router.push({
        name: 'Home',
      })
    })
    .catch((err) => (error.value = err))
}
</script>

<style scoped></style>
