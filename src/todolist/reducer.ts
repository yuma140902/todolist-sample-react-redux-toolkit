import { AddTask, CompleteTask, RemoveTask } from "./actionTypes"
import { TodoListState } from "./state";

export function todoListReducer(state: TodoListState = [], action: AddTask | RemoveTask | CompleteTask): TodoListState {
  switch(action.type) {
    case 'add_task':
        return [...state, {text: action.text, completed: false}];
    case 'remove_task': {
      let newState = [...state];
      newState.splice(action.index, 1);
      return newState;
    }
    case 'complete_task': {
      let newState = [...state];
      newState[action.index].completed = true;
      return newState;
    }
    default:
      return state
  }
}