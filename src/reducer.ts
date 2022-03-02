import { combineReducers } from 'redux'
import { filterReducer } from './filter/reducer'
import { todoListReducer } from './todolist/reducer'

export default combineReducers({
  filter: filterReducer,
  tasks: todoListReducer,
})
