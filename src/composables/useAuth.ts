import useSessionStore from '@/stores/session'
import supabase from '@/utils/supabase'

const useAuth = () => {
  const session = useSessionStore()
  const login = async (email: string, password: string) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })
    if (error) {
      throw new Error(error.message)
    } else {
      session.$patch({ session: data })
      return data
    }
  }

  const register = async (email: string, password: string) => {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    })
    if (error) {
      throw new Error(error.message)
    } else {
      return data
    }
  }

  return { login, register }
}

export default useAuth
