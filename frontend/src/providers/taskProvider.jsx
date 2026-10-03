/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useState } from 'react'
import { toast } from 'react-hot-toast'
import { taskService } from '../services/taskService'

const TaskContext = createContext()
export const useTasks = () => useContext(TaskContext)

const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([])
  const [filteredTasks, setFilteredTasks] = useState([])
  const [editedTask, setEditedTask] = useState(undefined)
  const [filter, setFilter] = useState('ALL')

  // Loading action state to track ongoing operations
  const [loadingAction, setLoadingAction] = useState(undefined)

  const fetchTasks = async () => {
    try {
      setLoadingAction({ type: 'fetch' })

      const loadedTasks = await taskService.fetchTasks()

      setTasks(loadedTasks)
      setLoadingAction(undefined)
    } catch (error) {
      console.error('Error fetching tasks:', error)
      toast.error('Error fetching tasks')
    }
  }

  useEffect(() => {
    fetchTasks()
  }, [])

  useEffect(() => {
    switch (filter) {
      case 'ALL':
        setFilteredTasks(tasks)
        break
      case 'ACTIVE':
        setFilteredTasks(tasks.filter(task => !task.isCompleted))
        break
      case 'COMPLETED':
        setFilteredTasks(tasks.filter(task => task.isCompleted))
        break
      default:
        console.error(`Unknown filter type: ${filter}`)
    }
  }, [tasks, filter])

  const addTask = async (value) => {
    try {
      const newTask = await taskService.addTask(value)

      if (newTask) {
        setTasks(prevTasks => [...prevTasks, newTask])
      }
    } catch (error) {
      console.error('Error creating task:', error)
    }
  }

  const removeTask = async (id) => {
    try {
      setLoadingAction({ task: id, type: 'delete' })

      await taskService.removeTask(id)

      setTasks(prevTasks => prevTasks.filter(task => task.id !== id))
    } catch (error) {
      console.error('Error deleting task:', error)
    } finally {
      setLoadingAction(undefined)
    }
  }

  const editTask = async (task, taskData, action = 'edit') => {
    try {
      setLoadingAction({ task: task.id, type: action })

      await taskService.editTask(task, taskData)
      await fetchTasks()
    } catch (error) {
      console.error('Error editing task:', error)
    } finally {
      setLoadingAction(undefined)
    }
  }

  const clearCompletedTasks = async () => {
    try {
      setLoadingAction({ type: 'clearCompleted' })

      const remainingTasks = await taskService.clearCompleted(tasks)

      setTasks(remainingTasks)
      setFilter('ALL')
    } catch (error) {
      console.error('Error clearing completed tasks:', error)
    } finally {
      setLoadingAction(undefined)
    }
  }

  return (
    <TaskContext.Provider value={{
      tasks,
      filteredTasks,
      editedTask,
      setEditedTask,
      filter,
      setFilter,
      addTask,
      removeTask,
      editTask,
      clearCompletedTasks,
      fetchTasks,
      loadingAction
    }}>
      {children}
    </TaskContext.Provider>
  )
}

export default TaskProvider