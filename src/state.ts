import { FilterState } from "./filter/state";
import { TodoListState } from "./todolist/state";

export interface AppState {
  filter: FilterState,
  tasks: TodoListState
}
