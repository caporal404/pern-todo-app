import axios from 'axios'
import { API_URL } from './api'

export const taskService = {
  async fetchTasks() {
    try {
      const response = await axios.get(`${API_URL}/todos`)
      return response.data?.data ?? []
    } catch (error) {
      console.error('Error fetching tasks:', error)
      throw error
    }
  },

  async addTask(value) {
    try {
      const response = await axios.post(`${API_URL}/todos`, {
        value: String(value).trim(),
        isCompleted: false,
        isEditing: false
      })

      return response.data?.data
    } catch (error) {
      console.error('Error creating task:', error)
      throw error
    }
  },

  async removeTask(id) {
    try {
      await axios.delete(`${API_URL}/todos/${id}`)
      return true
    } catch (error) {
      console.error('Error deleting task:', error)
      throw error
    }
  },

  async editTask(task, taskData) {
    try {
      await axios.put(`${API_URL}/todos/${task.id}`, {
        ...task,
        ...taskData
      })

      return {
        ...task,
        ...taskData
      }
    } catch (error) {
      console.error('Error editing task:', error)
      throw error
    }
  },

  async clearCompleted(tasks) {
    try {
      const completedTasks = tasks.filter(task => task.isCompleted)

      await Promise.all(
        completedTasks.map(task => axios.delete(`${API_URL}/todos/${task.id}`))
      )

      return tasks.filter(task => !task.isCompleted)
    } catch (error) {
      console.error('Error clearing completed tasks:', error)
      throw error
    }
  }
}