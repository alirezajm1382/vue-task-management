import { defineStore } from 'pinia'
import { reactive } from 'vue'
import {
  createTask,
  deleteTask,
  getTask,
  listTasks,
  updateTask,
} from '@/composables/tasksComposable'
import type { CreateTaskPayload } from '@/types'
import useSessionStore from './session'

const useTasks = defineStore('tasks', () => {
  const tasks = reactive([])
  const sessionStore = useSessionStore()

  async function create(payload: CreateTaskPayload) {
    await createTask(payload)
  }
  async function remove(taskId: number) {
    await deleteTask(taskId)
  }
  async function update(taskId: number, payload: CreateTaskPayload) {
    await updateTask(taskId, payload)
  }
  async function get(taskId: number) {
    await getTask(taskId)
  }
  async function list() {
    await listTasks(sessionStore.session.user?.id)
  }

  return { tasks, create, remove, update, get, list }
})

export default useTasks
