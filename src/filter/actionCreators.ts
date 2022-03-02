import { SetFilter } from "./actionTypes"

export function setFilter(filter: 'all' | 'todo' | 'completed'): SetFilter {
  return {
    type: 'set_filter',
    filter
  }
}