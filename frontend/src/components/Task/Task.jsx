/* eslint-disable react/prop-types */
import { Reorder } from "framer-motion";
import { useTasks } from "../../providers/taskProvider";
import { useTheme } from "../../providers/themeProvider";
import Loader from "../Loader";
import "./Task.css";
import toast from "react-hot-toast";

const Task = ({ data: task }) => {
  const { editedTask, setEditedTask, editTask, removeTask, loadingAction } = useTasks();
  const { theme } = useTheme();

  // Determine if the task is currently being toggled, edited, or deleted
  const isToggling = loadingAction?.task === task.id && loadingAction?.type === "toggle";
  const isEditing = loadingAction?.task === task.id && loadingAction?.type === "edit";
  const isDeleting = loadingAction?.task === task.id && loadingAction?.type === "delete";

  return (
    <Reorder.Item
      value={task}
      className={`
        task d-flex py-3 px-4 border-bottom
        ${task.isCompleted && "completed"}
        ${theme === "DARK" && "dark"}
      `}
    >
      <label className="w-100 d-flex align-items-center">
        <button
          type="button"
          className={`task-toggle ${task.isCompleted ? "checked" : ""}`}
          onClick={() => toast.promise(
            editTask(task, { isCompleted: !task.isCompleted }, "toggle"),
            {
              success: 'Task status updated!',
              error: 'Error updating task status!'
            }
          )}
          disabled={editedTask == task || loadingAction?.task === task.id}
        >
          {isToggling && <Loader />}
        </button>

        <p className="w-100 m-0 p-0 ps-4" title={task.value}>
          {task.value}
        </p>
      </label>

      <div className="controls d-flex gap-2">
        <button
          className="btn btn-edit"
          onClick={() => setEditedTask(task)}
          disabled={editedTask == task || task.isCompleted || loadingAction?.task === task.id}
        >
          {isEditing ? <Loader /> : <i className="fas fa-pencil-alt" />}
        </button>

        <button
          className="btn btn-remove"
          onClick={() => toast.promise(
            removeTask(task.id),
            {
              success: 'Task removed!',
              error: 'Error removing task!'
            }
          )}
          disabled={loadingAction?.task === task.id}
        >
          {isDeleting ? <Loader /> : <i className="fas fa-trash-alt" />}
        </button>
      </div>
    </Reorder.Item>
  );
};

export default Task;
