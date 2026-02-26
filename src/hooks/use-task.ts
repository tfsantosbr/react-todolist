import { TaskState } from "./../models/task";
import useLocalStorage from "use-local-storage";
import type { Task } from "../models/task";
import { TASKS_COLLECTION_KEY } from "../constants/task-contants";

export default function useTask() {
  const [task, setTasks] = useLocalStorage<Task[]>(TASKS_COLLECTION_KEY, []);

  function prepareTask() {
    const newTask: Task = {
      id: generateTaskId(),
      title: "",
      state: TaskState.Creating,
    };

    setTasks([...task, newTask]);
  }

  function generateTaskId() {
    return Math.random().toString(36).substring(2, 9);
  }

  return {
    prepareTask,
  };
}
