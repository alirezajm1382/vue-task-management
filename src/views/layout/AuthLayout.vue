<template>
  <div class="w-dvw h-dvh">
    <div class="absolute top-1/2 left-1/2 -translate-1/2">
      <div class="flex gap-2 items-center justify-center pb-6">
        <ListCheckIcon :size="32" class="text-primary" />
        <h2 class="font-bold text-2xl">TaskFlow</h2>
      </div>
      <RouterView />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ListCheckIcon } from 'lucide-vue-next'
</script>

<style scoped></style>
