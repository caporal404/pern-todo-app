/* eslint-disable react/prop-types */
import { useTasks } from "../providers/taskProvider"

const Filter = ({ filter, onFilter }) => {
  const { filter: currentFilter } = useTasks()
  
  return (
    <button
      className={`btn btn-filter ${currentFilter === filter.toUpperCase() ? 'active' : ''}`}
      onClick={onFilter}
    >{filter}</button>
  )
}

export default Filter