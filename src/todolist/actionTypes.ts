export interface AddTask {
  type: 'add_task',
  text: string
}

export interface RemoveTask {
  type: 'remove_task',
  index: number
}

export interface CompleteTask {
  type: 'complete_task',
  index: number
}
