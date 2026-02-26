import useLocalStorage from "use-local-storage";
import { TaskState, type Task } from "../models/task";
import { TASKS_COLLECTION_KEY } from "../constants/task-contants";
import { delay } from "../helpers/utils";
import React from "react";

export default function useTasks() {
  const [tasksData] = useLocalStorage<Task[]>(TASKS_COLLECTION_KEY, []);
  const [tasks, setTasks] = React.useState<Task[]>([]);
  const [isLoadingTasks, setIsLoadingTasks] = React.useState(true);

  React.useEffect(() => {
    async function load() {
      await delay(2000);
      setIsLoadingTasks(false);
    }
    load();
  }, []);

  React.useEffect(() => {
    setTasks(tasksData);
  }, [tasksData]);

  return {
    tasks,
    createdTasksCount: tasks.filter((task) => task.state === TaskState.Created).length,
    concludedTasksCount: tasks.filter((task) => task.concluded).length,
    isLoadingTasks,
  };
}
