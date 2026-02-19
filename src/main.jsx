import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ThemeProvider from './providers/themeProvider.jsx'
import TaskProvider from './providers/taskProvider.jsx'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <TaskProvider>
        <App />
      </TaskProvider>
    </ThemeProvider>
  </StrictMode>,
)
