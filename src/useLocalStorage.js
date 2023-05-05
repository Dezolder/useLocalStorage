import { useCallback, useState } from "react"

const getToken = (key) => localStorage.getItem(key) || null

export function useLocalStorage(key) {
  const [token, setToken] = useState(() => getToken(key))

  const setItem = useCallback((data) => {
    localStorage.setItem(key, data)
    setToken(data)
  })

  function removeItem() {
    localStorage.removeItem(key)
    setToken(null)
  }

  return [token, { setItem, removeItem }]
}