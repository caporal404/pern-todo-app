/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from 'react'

const ThemeContext = createContext()
export const useTheme = () => useContext(ThemeContext)

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('LIGHT') // theme: LIGHT | DARK

  const toggleTheme = () => {
    setTheme(theme => theme === 'LIGHT' ? 'DARK' : 'LIGHT')
  }
  
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider