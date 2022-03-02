import { AddTask, CompleteTask, RemoveTask } from "./actionTypes"

export function addTask(text: string): AddTask {
  return {
    type: 'add_task',
    text
  }
}

export function removeTask(index: number): RemoveTask {
  return {
    type: 'remove_task',
    index
  }
}

export function completeTask(index: number): CompleteTask {
  return {
    type: 'complete_task',
    index
  }
}
