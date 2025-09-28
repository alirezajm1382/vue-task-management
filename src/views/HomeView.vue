<template>
  <TheNavigation />
  <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
    <KanbanColumn status="todo" title="To Do" />
    <KanbanColumn status="in-progress" title="In Progress" />
    <KanbanColumn status="done" title="Done" />
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import KanbanColumn from '@/components/KanbanColumn.vue'
import TheNavigation from '../components/TheNavigation.vue'
import useTasks from '../stores/tasks'

const { list } = useTasks()

onMounted(() => {
  list()
})
</script>

<style scoped></style>
