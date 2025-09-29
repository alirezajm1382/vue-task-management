import type { Task, CreateTaskPayload, UpdateTaskPayload } from '@/types'
import axiosInstance from '@/utils/axios'

export const listTasks = async (user_id?: string): Promise<Task[]> => {
  const params = user_id ? { user_id } : {}
  const response = await axiosInstance.get<Task[]>('/', { params })
  return response.data
}

export const getTask = async (taskId: number): Promise<Task> => {
  const response = await axiosInstance.get<Task>(`/${taskId}`)
  return response.data
}

export const createTask = async (payload: CreateTaskPayload): Promise<Task> => {
  const response = await axiosInstance.post<Task>('/', payload)
  return response.data
}

export const updateTask = async (taskId: number, payload: UpdateTaskPayload): Promise<Task> => {
  const response = await axiosInstance.patch<Task>(`/${taskId}`, payload)
  return response.data
}

export const deleteTask = async (taskId: number): Promise<Task> => {
  const response = await axiosInstance.delete<Task>(`/${taskId}`)
  return response.data
}
