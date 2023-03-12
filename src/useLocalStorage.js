import { useState } from "react"

export function useLocalStorage(key) {
  const [token, setToken] = useState(
    localStorage.getItem(key) || ''
  )

  function setItem(data) {
    localStorage.setItem(key, data)
    setToken(data)
  }

  function removeItem() {
    localStorage.removeItem(key)
    setToken('')
  }
  return [token, { setItem, removeItem }]
}