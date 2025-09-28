<template>
  <div>
    <h3>{{ props.title }}</h3>
    <p>{{ props.status }}</p>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  title: string
  status: string
}>()
</script>

<style scoped></style>
