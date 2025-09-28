import useSessionStore from '@/stores/session'
import supabase from '@/utils/supabase'
import useGlobalStore from '@/stores/global'

const useAuth = () => {
  const session = useSessionStore()
  const global = useGlobalStore()
  const login = async (email: string, password: string) => {
    global.setLoading(true)
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })
    if (error) {
      global.setLoading(false)
      throw new Error(error.message)
    } else {
      session.$patch({ session: data })
      global.setLoading(false)
      return data
    }
  }

  const register = async (email: string, password: string) => {
    global.setLoading(true)
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    })
    if (error) {
      global.setLoading(false)
      throw new Error(error.message)
    } else {
      global.setLoading(false)
      return data
    }
  }

  return { login, register }
}

export default useAuth
