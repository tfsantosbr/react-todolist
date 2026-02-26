import { TaskState } from "./../models/task";
import useLocalStorage from "use-local-storage";
import type { Task } from "../models/task";
import { TASKS_COLLECTION_KEY } from "../constants/task-contants";
import { delay } from "../helpers/utils";
import React from "react";

export default function useTask() {
  const [tasks, setTasks] = useLocalStorage<Task[]>(TASKS_COLLECTION_KEY, []);
  const [isUpdatingTask, setIsUpdatingTask] = React.useState(false);
  const [isDeletingTask, setIsDeletingTask] = React.useState(false);

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

  async function updateTask(id: string, payload: { title: Task["title"] }) {
    setIsUpdatingTask(true);

    await delay(1000);

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

    setIsUpdatingTask(false);
  }

  function updateTaskConcludedStatus(id: string, concluded: boolean) {
    setTasks(
      tasks.map((task) => (task.id === id ? { ...task, concluded } : task))
    );
  }

  async function deleteTask(id: string) {
    setIsDeletingTask(true);
    await delay(1000);
    setTasks(tasks.filter((task) => task.id !== id));
    setIsDeletingTask(false);
  }

  return {
    prepareTask,
    updateTask,
    updateTaskConcludedStatus,
    deleteTask,
    isUpdatingTask,
    isDeletingTask,
  };
}
