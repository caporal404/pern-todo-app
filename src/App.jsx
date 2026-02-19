import TaskForm from './components/TaskForm/TaskForm';
import TaskList from './components/TaskList/TaskList';
import FilterControls from './components/FilterControls/FilterControls';
import iconMoon from '/assets/images/icon-moon.svg'
import './App.css'

function App() {
  return (
    <div className="App">
      <div className="d-flex justify-content-beetwen mb-4">
        <h2 className='w-100 m-0 text-left'>TODO</h2>
        
        <button className="btn-theme">
          <img src={iconMoon} alt="Icon dark mode" className="" />
        </button>
      </div>

      <TaskForm />

      <div className="shadow-lg rounded bg-white mt-4">
        <TaskList />
        <FilterControls />
      </div>
    </div>
  );
}

export default App;
