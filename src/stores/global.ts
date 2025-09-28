import { defineStore } from 'pinia'
import { ref } from 'vue'

const useGlobalStore = defineStore('global', () => {
  const isLoading = ref(false)


  function setLoading(state: boolean) {
    isLoading.value = state
  }

  return { isLoading, setLoading }
})

export default useGlobalStore
