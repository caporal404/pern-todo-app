import { useTheme } from '../../providers/themeProvider';
import { useTasks } from "../../providers/taskProvider"
import './FilterControls.css'

const FilterControls = () => {
  const { theme } = useTheme()
  const { dispatch, filteredTasks, filter, setFilter } = useTasks()

  return (
    <div className={`
      filter-controls d-flex align-items-center justify-content-between py-3 px-4
      ${theme === 'DARK' && 'dark'}
    `}>
      <span className="">{`${filteredTasks.length} tasks left`}</span>

      <div className="filters d-flex gap-4">
        <button
          className={`btn btn-filter ${filter === 'ALL' && 'active'}`}
          onClick={() => setFilter('ALL')}
        >All</button>

        <button
          className={`btn btn-filter ${filter === 'ACTIVE' && 'active'}`}
          onClick={() => setFilter('ACTIVE')}
        >Active</button>
    
        <button
          className={`btn btn-filter ${filter === 'COMPLETED' && 'active'}`}
          onClick={() => setFilter('COMPLETED')}
        >Completed</button>
      </div>

      <button 
        className="btn btn-clear p-0"
        onClick={() => {
          dispatch({type: 'CLEAR_COMPLETED'})
          setFilter('ALL')
        }}
      >Clear completed</button>
    </div>
  )
}

export default FilterControls