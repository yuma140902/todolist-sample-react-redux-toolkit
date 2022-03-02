import { SetFilter } from "./actionTypes"
import { FilterState, initialFilterState } from "./state";

export function filterReducer(state: FilterState = initialFilterState, action: SetFilter): FilterState {
  if (action.type === 'set_filter') {
    return action.filter
  }
  return state;
}