// export function useDarkmode() {
//   const darkMode = useState<boolean>('darkMode', () => false)

//   const checkDarkmode = () => {
//     if (document.body.classList.contains('dark-mode')) {
//       darkMode.value = true
//     }
//     else {
//       darkMode.value = false
//     }
//     return darkMode.value
//   }

//   const toggleDarkmode = () => {
//     if (document.body.classList.contains('light-mode')) {
//       document.body.classList.remove('light-mode')
//       document.body.classList.add('dark-mode')
//       darkMode.value = true
//     }
//     else {
//       document.body.classList.remove('dark-mode')
//       document.body.classList.add('light-mode')
//       darkMode.value = false
//     }
//     checkDarkmode()
//   }

//   return { darkMode, toggleDarkmode, checkDarkmode }
// }

export function useDarkmode() {
  const darkMode = useState<boolean>('darkMode', () => false)

  const applyMode = (isDark: boolean) => {
    if (!import.meta.client)
      return

    document.body.classList.toggle('dark-mode', isDark)
    document.body.classList.toggle('light-mode', !isDark)

    darkMode.value = isDark
    localStorage.setItem('darkMode', JSON.stringify(isDark))
  }

  const initDarkmode = () => {
    if (!import.meta.client)
      return

    const saved = localStorage.getItem('darkMode')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches

    const isDark = saved ? JSON.parse(saved) : prefersDark
    applyMode(isDark)
  }

  const toggleDarkmode = () => {
    applyMode(!darkMode.value)
  }

  return { darkMode, toggleDarkmode, initDarkmode }
}
