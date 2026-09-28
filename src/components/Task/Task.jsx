/* eslint-disable react/prop-types */
import { Reorder } from 'framer-motion';
import { useTasks } from '../../providers/taskProvider';
import { useTheme } from '../../providers/themeProvider';
import './Task.css';

const Task = ({ data: task }) => {
  const { editedTask, setEditedTask, dispatch } = useTasks();
  const { theme } = useTheme()

  return (
    <Reorder.Item
      value={task}
      className={`
        task d-flex py-3 px-4 border-bottom 
        ${task.isCompleted && 'completed'}
        ${theme === 'DARK' && 'dark'}
      `}
    >
      <label className='w-100 d-flex align-items-center'>
        <input
          type="checkbox"
          checked={task.isCompleted}
          onChange={() => dispatch({ type: 'TOGGLE', payload: task.id })}
          disabled={editedTask == task} // Disabled on Edition Mode
        />

        <p className="w-100 m-0 p-0 ps-4" title={task.value}>
          {task.value}
        </p>
      </label>

      <div className="controls d-flex gap-2">
        <button className='btn btn-edit'
          onClick={() => setEditedTask(task)}
          disabled={editedTask == task || task.isCompleted} // Disabled on Edition Mode
        >
          <i className="fas fa-pencil-alt" />
        </button>

        <button className='btn btn-remove' onClick={() => dispatch({ type: 'REMOVE', payload: task.id })}>
          <i className="fas fa-trash-alt" />
        </button>
      </div>
    </Reorder.Item>
  )
}

export default Task;