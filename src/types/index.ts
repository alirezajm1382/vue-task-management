export type TaskStatus = 'todo' | 'in_progress' | 'done'

export interface Task {
  id: number
  title: string
  status: TaskStatus
  user_id: string
  created_at?: string
  updated_at?: string
}

export interface CreateTaskPayload {
  title: string
  status: TaskStatus
  user_id: string
}

export interface UpdateTaskPayload {
  title?: string
  status?: TaskStatus
}

export interface SessionDataInit {
  session?: {
    access_token?: string
  }
}
