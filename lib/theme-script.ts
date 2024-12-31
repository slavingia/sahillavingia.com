export const themeScript = `
  (function() {
    function getTheme() {
      const savedTheme = localStorage.getItem('darkMode')
      if (savedTheme !== null) {
        return savedTheme === 'true'
      }
      return window.matchMedia('(prefers-color-scheme: dark)').matches
    }

    if (getTheme()) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  })()
` 