import { useState } from "react";
import ButtonIcon from "../components/button-icon";
import Card from "../components/card";
import Text from "../components/text";
import InputCheckbox from "../components/input-checkbox";
import TrashIcon from "../assets/icons/trash.svg?react";
import PencilIcon from "../assets/icons/pencil.svg?react";
import XIcon from "../assets/icons/x.svg?react";
import CheckIcon from "../assets/icons/check.svg?react";
import InputText from "../components/input-text";
import { TaskState, type Task } from "../models/task";
import useTask from "../hooks/use-task";

export interface TaskItemProps {
  task?: Task;
}

export default function TaskItem({ task }: TaskItemProps) {
  const [isEditing, setIsEditing] = useState(
    task?.state === TaskState.Creating,
  );

  const [taskTitle, setTaskTitle] = useState(task?.title || "");

  const { updateTask, updateTaskConcludedStatus, deleteTask } = useTask();

  function handleEditTask() {
    setIsEditing(true);
  }

  function handleCancelEditTask() {
    if (task?.state === TaskState.Creating) {
      deleteTask(task.id);
    }
    setIsEditing(false);
  }

  function handleChangeTaskTitle(event: React.ChangeEvent<HTMLInputElement>) {
    setTaskTitle(event.target.value);
  }

  function handleChangeTaskStatus(event: React.ChangeEvent<HTMLInputElement>) {
    const taskChecked = event.target.checked;
    updateTaskConcludedStatus(task!.id, taskChecked);
  }

  function handleDeleteTask() {
    deleteTask(task!.id);
  }

  function handleSaveTask(event: React.SubmitEvent<HTMLFormElement>) {
    event.preventDefault();
    updateTask(task!.id, { title: taskTitle });
    setIsEditing(false);
  }

  return (
    <Card size="md">
      {isEditing ? (
        <form onSubmit={handleSaveTask} className="flex items-center gap-2">
          <InputText
            className="flex-1"
            onChange={handleChangeTaskTitle}
            value={taskTitle}
            required
            autoFocus
          />
          <div className="flex gap-1">
            <ButtonIcon
              type="button"
              icon={XIcon}
              variant="secondary"
              onClick={handleCancelEditTask}
            />
            <ButtonIcon type="submit" icon={CheckIcon} variant="primary" />
          </div>
        </form>
      ) : (
        <div className="flex items-center gap-2">
          <InputCheckbox
            checked={task?.concluded}
            onChange={handleChangeTaskStatus}
          />
          <Text
            className={["flex-1", task?.concluded ? "line-through" : ""]
              .filter(Boolean)
              .join(" ")}
          >
            {task?.title}
          </Text>
          <div className="flex gap-1">
            <ButtonIcon
              type="button"
              icon={TrashIcon}
              variant="tertiary"
              onClick={handleDeleteTask}
            />
            <ButtonIcon
              type="button"
              icon={PencilIcon}
              variant="tertiary"
              onClick={handleEditTask}
            />
          </div>
        </div>
      )}
    </Card>
  );
}
