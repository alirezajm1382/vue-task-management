<template>
  <TheNavigation />
  <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
    <KanbanColumn status="todo" title="To Do" />
    <KanbanColumn status="in-progress" title="In Progress" />
    <KanbanColumn status="done" title="Done" />
  </div>
</template>

<script setup lang="ts">
import TheNavigation from '../components/TheNavigation.vue'
</script>

<style scoped></style>
