import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_SUPABASE_BACKEND,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    Authorization: `Bearer ${localStorage.getItem('access_token')}`,
  },
})

export default axiosInstance
