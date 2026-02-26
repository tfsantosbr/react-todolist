import useLocalStorage from "use-local-storage";
import type { Task } from "../models/task";

export default function useTasks() {
    const [tasks] = useLocalStorage<Task[]>("tasks", []);

    return {
        tasks,
        tasksCount: tasks.length,
        concludedTasksCount: tasks.filter((task) => task.concluded).length,
    }
}