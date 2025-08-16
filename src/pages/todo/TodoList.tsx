import TaskItem from "../../components/todo-list/TaskItem";
import ConfirmModal from "../../features/modals/ConfirmModal";
import { useTodoStore } from "../../store/todoStore";
import "./TodoList.css";

export default function TodoList() {
  const {
    task,
    tasks,
    error,
    showModal,
    setTask,
    setShowModal,
    addTask,
    deleteTask,
  } = useTodoStore();

  return (
    <>
      <div className="container">
        <div className="box">
          <h1>Todo List</h1>
          <div className="input-section">
            <input
              type="text"
              value={task}
              onChange={(e) => setTask(e.target.value)}
              placeholder="Enter a task"
            />
            <button onClick={addTask}>Add Task</button>
          </div>
          <ul>
            {tasks.map((item) => (
              <TaskItem key={item.id} item={item} />
            ))}
          </ul>
          {error && (
            <p className="error-text" style={{ color: "red", fontSize: 12 }}>
              {error}
            </p>
          )}
        </div>
        <ConfirmModal
          isOpen={showModal}
          onClose={() => setShowModal(false)}
          onConfirm={deleteTask}
          message="Are you sure you want to delete this task?"
        />
      </div>
    </>
  );
}
