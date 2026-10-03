import { Toaster } from 'react-hot-toast';
import { useTheme } from './providers/themeProvider'
import TaskForm from './components/TaskForm/TaskForm';
import TaskList from './components/TaskList/TaskList';
import FilterControls from './components/FilterControls/FilterControls';
import './App.css'

import iconMoon from '/assets/images/icon-moon.svg'
import iconSun from '/assets/images/icon-sun.svg'

function App() {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className={`App ${theme === 'DARK' && 'dark'}`}>
      <div className="container">
        <Toaster />
        
        <div className="d-flex justify-content-beetwen mb-4">
          <h2 className='w-100 m-0 text-left'>TODO</h2>

          <button 
            className="btn-theme"
            onClick={toggleTheme}
          >
            <img src={theme === 'DARK' ? iconSun : iconMoon} alt="Icon dark mode" />
          </button>
        </div>

        <TaskForm />

        <div className="shadow-lg rounded bg-white mt-4">
          <TaskList />
          <FilterControls />
        </div>
      </div>
    </div>
  );
}

export default App;
