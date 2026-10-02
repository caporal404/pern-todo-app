/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useState } from 'react'
import { taskService } from '../services/taskService'

const TaskContext = createContext()
export const useTasks = () => useContext(TaskContext)

const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([])
  const [filteredTasks, setFilteredTasks] = useState([])
  const [editedTask, setEditedTask] = useState(undefined)
  const [filter, setFilter] = useState('ALL')

  const fetchTasks = async () => {
    try {
      const loadedTasks = await taskService.fetchTasks()
      setTasks(loadedTasks)
    } catch (error) {
      console.error('Error fetching tasks:', error)
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

  const toggleTask = async (task) => {
    try {
      await taskService.toggleTask(task)
      await fetchTasks()
    } catch (error) {
      console.error('Error toggling task:', error)
    }
  }

  const removeTask = async (id) => {
    try {
      await taskService.removeTask(id)
      setTasks(prevTasks => prevTasks.filter(task => task.id !== id))
    } catch (error) {
      console.error('Error deleting task:', error)
    }
  }

  const editTask = async (task, taskData) => {
    try {
      await taskService.editTask(task, taskData)

      await fetchTasks()
    } catch (error) {
      console.error('Error editing task:', error)
    }
  }

  const clearCompletedTasks = async () => {
    try {
      const remainingTasks = await taskService.clearCompleted(tasks)
      setTasks(remainingTasks)
      setFilter('ALL')
    } catch (error) {
      console.error('Error clearing completed tasks:', error)
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
      toggleTask,
      removeTask,
      editTask,
      clearCompletedTasks,
      fetchTasks
    }}>
      {children}
    </TaskContext.Provider>
  )
}

export default TaskProvider