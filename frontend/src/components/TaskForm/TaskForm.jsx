import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { useTheme } from '../../providers/themeProvider';
import { useTasks } from '../../providers/taskProvider';
import './TaskForm.css'
import toast from 'react-hot-toast';

const TaskForm = () => {
  const { theme } = useTheme()
  const { editedTask, setEditedTask, addTask, editTask } = useTasks()
  const [task, setTask] = useState(""); // Current task 

  // the current task began the edited task during Edition (Modification) Mode
  useEffect(() => editedTask && setTask(editedTask.value), [editedTask]) // editedTask : { id, value, isCompleted }

  // Focus on input field when component render
  const inputRef = useRef()
  useLayoutEffect(() => inputRef.current.focus())

  const handleSubmit = e => {
    e.preventDefault();

    // If task only contain blank
    if (task.trim() == "") {
      setTask("") // Clear input field
      setEditedTask(undefined) // Leave Edition Mode
      console.error("Task only contain blank")
      return
    }

    // Add task if isn't Edition Mode else edit task
    if (!editedTask) {
      toast.promise(
        addTask(task),
        {
          success: 'Task added!',
          error: 'Error adding task!'
        }
      )
    }
    else {
      toast.promise(
        editTask(editedTask, { value: task }, 'edit'),
        {
          success: 'Task updated!',
          error: 'Error updating task!'
        }
      )
    }

    setTask("") // Clear input field
    setEditedTask(undefined) // Leave Edition Mode
  }

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <div className={`form-control ${theme === 'DARK' && 'dark'} p-0`}>
        <input
          type="text"
          className='w-100 m-0 py-3 pe-3'
          value={task}
          onChange={e => {
            const value = e.target.value
            setTask(value.charAt(0).toUpperCase() + value.slice(1))
          }}
          placeholder="Ajouter une tâche..."
          ref={inputRef}
          required
        />
      </div>
    </form>
  )
}

export default TaskForm