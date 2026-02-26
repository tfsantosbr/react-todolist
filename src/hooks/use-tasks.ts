import useLocalStorage from "use-local-storage";
import { TaskState, type Task } from "../models/task";
import { TASKS_COLLECTION_KEY } from "../constants/task-contants";

export default function useTasks() {
    const [tasks] = useLocalStorage<Task[]>(TASKS_COLLECTION_KEY, []);

    return {
        tasks,
        createdTasksCount: tasks.filter(task=>task.state === TaskState.Created).length,
        concludedTasksCount: tasks.filter((task) => task.concluded).length,
    }
}