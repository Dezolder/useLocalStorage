import { useState } from "react"

export function useLocalStorage(key, token = '') {
  const [value, setValue] = useState(token)

  function setItem(data) {
    localStorage.setItem(key, data)
    setValue(data)
  }

  function removeItem() {
    localStorage.removeItem(key)
    setValue('')
  }
  return [value, { setItem, removeItem }]
}