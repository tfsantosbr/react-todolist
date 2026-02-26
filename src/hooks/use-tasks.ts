import useLocalStorage from "use-local-storage";
import type { Task } from "../models/task";
import { TASKS_COLLECTION_KEY } from "../constants/task-contants";

export default function useTasks() {
    const [tasks] = useLocalStorage<Task[]>(TASKS_COLLECTION_KEY, []);

    return {
        tasks,
        tasksCount: tasks.length,
        concludedTasksCount: tasks.filter((task) => task.concluded).length,
    }
}