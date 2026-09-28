import { Reorder } from 'framer-motion';
import { useTasks } from '../../providers/taskProvider';
import Task from '../Task/Task'

const TaskList = () => {
  const { tasks, filteredTasks, setFilteredTasks } = useTasks()

  return (
    <Reorder.Group 
      className="task-list"
      axis='y'
      values={tasks}
      onReorder={setFilteredTasks}
    >
      {filteredTasks.map(task => (
        <Task key={task.id} data={task} />
      ))}
    </Reorder.Group>
  )
}

export default TaskList