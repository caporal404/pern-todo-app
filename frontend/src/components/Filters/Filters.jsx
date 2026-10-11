import toast from 'react-hot-toast';
import { useTasks } from "../../providers/taskProvider"
import { useTheme } from '../../providers/themeProvider';
import Loader from '../Loader';
import Filter from '../Filter';
import './Filters.css'

const Filters = () => {
  const { theme } = useTheme()
  const { clearCompletedTasks, filteredTasks, setFilter, loadingAction } = useTasks()

  const filters = ['All', 'Active', 'Completed']

  const handleClearCompleted = () => {
    toast.promise(
      clearCompletedTasks(),
      {
        success: 'Completed tasks cleared!',
        error: 'Error clearing completed tasks!'
      }
    )

    setFilter('ALL')
  }

  const handleFilter = (filter) => {
    setFilter(filter.toUpperCase())
  }

  return (
    <div className={`
      filter-controls d-flex align-items-center justify-content-between py-3 px-4
      ${theme === 'DARK' && 'dark'}
    `}>
      <span className="">{`${filteredTasks.length} tasks left`}</span>

      <div className="filters d-flex gap-4">
        {filters.map((filter, index) => (
          <Filter key={`filter-${index}`} filter={filter} onFilter={() => handleFilter(filter)} />
        ))}
      </div>

      <button
        className="btn btn-clear p-0"
        onClick={handleClearCompleted}
      >{loadingAction?.type === 'clearCompleted'
        ? <><Loader /> Clearing...</>
        : 'Clear completed'}
      </button>
    </div>
  )
}

export default Filters