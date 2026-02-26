export interface Task {
  id: string;
  title: string;
  concluded?: boolean;
  state?: TaskState;
}

export const TaskState = {
  Creating: "creating",
  Created: "created",
} as const;

export type TaskState = typeof TaskState[keyof typeof TaskState];
