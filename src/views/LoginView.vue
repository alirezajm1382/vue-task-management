<template>
  <div
    class="card w-96 bg-base-200 card-xl border-1 border-gray-200 dark:border-gray-700 shadow-xl"
  >
    <div class="card-body">
      <h2 class="text-2xl font-semibold text-center">Log in to your account</h2>
      <fieldset class="fieldset">
        <legend class="fieldset-legend">Email Address</legend>
        <input type="text" class="input" placeholder="user@email.com" />
      </fieldset>
      <fieldset class="fieldset">
        <legend class="fieldset-legend">Password</legend>
        <input type="password" class="input" placeholder="Enter here" />
      </fieldset>
      <div class="justify-end card-actions pt-4">
        <button class="btn btn-primary w-full">Log In</button>
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

<script setup lang="ts"></script>

<style scoped></style>
