import { create } from "zustand";
import { persist } from "zustand/middleware";

interface Task {
  id: number;
  text: string;
  completed: boolean;
}

interface TodoStore {
  task: string;
  tasks: Task[];
  editTaskId: number | null;
  editText: string;
  error: string;
  showModal: boolean;
  taskToDelete: number | null;
  setTask: (task: string) => void;
  setEditText: (text: string) => void;
  setShowModal: (show: boolean) => void;
  addTask: () => void;
  confirmDelete: (id: number) => void;
  deleteTask: () => void;
  toggleComplete: (id: number) => void;
  editTask: (task: Task) => void;
  saveTask: (id: number) => void;
}

export const useTodoStore = create<TodoStore>()(
  persist(
    (set, get) => ({
      task: "",
      tasks: [],
      editTaskId: null,
      editText: "",
      error: "",
      showModal: false,
      taskToDelete: null,

      setTask: (task) => set({ task }),
      setEditText: (editText) => set({ editText }),
      setShowModal: (showModal) => set({ showModal }),

      addTask: () => {
        const { task, tasks } = get();
        if (task.trim() === "") {
          set({ error: "Please enter a task before adding." });
          return;
        }
        set({
          error: "",
          tasks: [
            ...tasks,
            {
              id: Date.now(),
              text: task,
              completed: false,
            },
          ],
          task: "",
        });
      },
      confirmDelete: (id) => {
        set({ taskToDelete: id, showModal: true });
      },
      deleteTask: () => {
        const { tasks, taskToDelete } = get();
        set({
          tasks: tasks.filter((t) => t.id !== taskToDelete),
          taskToDelete: null,
          showModal: false,
        });
      },
      toggleComplete: (id) => {
        const { tasks } = get();
        set({
          tasks: tasks.map((t) =>
            t.id === id ? { ...t, completed: !t.completed } : t
          ),
        });
      },
      editTask: (task) => {
        set({ editTaskId: task.id, editText: task.text });
      },
      saveTask: (id) => {
        const { tasks, editText } = get();
        set({
          tasks: tasks.map((t) => (t.id === id ? { ...t, text: editText } : t)),
          editTaskId: null,
          editText: "",
        });
      },
    }),
    { name: "todo-storage" }
  )
);
