import { defineStore } from 'pinia'
import { ref, watch } from 'vue'

const DARK_MODE_KEY = 'isDarkMode'

const useNavigationStore = defineStore('navigation', () => {
  // Initialize from localStorage if available
  const isDarkMode = ref(localStorage.getItem(DARK_MODE_KEY) === 'false')

  function toggleDarkMode() {
    isDarkMode.value = !isDarkMode.value
  }

  // Watch for changes and update <html> class and localStorage
  watch(isDarkMode, (val) => {
    if (val) {
      document.documentElement.setAttribute('data-theme', 'dark')
    } else {
      document.documentElement.removeAttribute('data-theme')
    }
    localStorage.setItem(DARK_MODE_KEY, val ? 'true' : 'false')
  })

  return {
    isDarkMode,
    toggleDarkMode,
  }
})

export default useNavigationStore
