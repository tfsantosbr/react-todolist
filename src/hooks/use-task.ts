import { TaskState } from "./../models/task";
import useLocalStorage from "use-local-storage";
import type { Task } from "../models/task";
import { TASKS_COLLECTION_KEY } from "../constants/task-contants";

export default function useTask() {
  const [tasks, setTasks] = useLocalStorage<Task[]>(TASKS_COLLECTION_KEY, []);

  function prepareTask() {
    const newTask: Task = {
      id: generateTaskId(),
      title: "",
      state: TaskState.Creating,
    };

    setTasks([...tasks, newTask]);
  }

  function generateTaskId() {
    return Math.random().toString(36).substring(2, 9);
  }

  function updateTask(id: string, payload: { title: Task["title"] }) {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? {
              ...task,
              state: TaskState.Created,
              ...payload,
            }
          : task,
      )
    );
  }

  function updateTaskConcludedStatus(id: string, concluded: boolean) {
    setTasks(
      tasks.map((task) => (task.id === id ? { ...task, concluded } : task))
    );
  }

  function deleteTask(id: string) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  return {
    prepareTask,
    updateTask,
    updateTaskConcludedStatus,
    deleteTask,
  };
}
