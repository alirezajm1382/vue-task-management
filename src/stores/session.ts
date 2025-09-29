import type { User, Session, WeakPassword } from '@supabase/supabase-js'
import { defineStore } from 'pinia'
import { computed, reactive, watch } from 'vue'

const useSessionStore = defineStore('session', () => {
  const session = reactive<{
    user: User | null
    session: Session | null
    weak_password?: WeakPassword | null
  }>({
    user: null,
    session: null,
    weak_password: null,
  })
  const isAuthenticated = computed(() => (!!session.user ? true : false))

  watch(session, (newSession) => {
    if (newSession.session && Object.getOwnPropertyNames(newSession).includes('session')) {
      localStorage.setItem('session', JSON.stringify(newSession.session.access_token))
    }
  })

  return { session, isAuthenticated }
})

export default useSessionStore
