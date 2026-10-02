import { Reorder } from 'framer-motion';
import { useTasks } from '../../providers/taskProvider';
import Task from '../Task/Task'

const TaskList = () => {
  const { tasks, filteredTasks, setFilteredTasks } = useTasks()

  if (!filteredTasks.length) {
    return <div className="bg-white d-flex flex-column gap-2 justify-content-center align-items-center py-5 border-bottom border-2">
      <img src='/assets/images/container.svg' alt="Empty Tasks Icon" className="text-gray" height={50} width={50} />
      <span className="fs-6">No added tasks yet</span>
    </div>
  }

  return (
    <Reorder.Group 
      className="task-list ps-0 mb-0"
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