import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Task = {
  text: string,
  completed: boolean
};

type TodoListState = Task[];

const initialState: TodoListState = [];

const todoListSlice = createSlice({
  name: 'todolist',
  initialState: initialState as TodoListState,
  reducers: {
    addTask: (state, action: PayloadAction<string>) => [...state, { text: action.payload, completed: false } ],
    removeTask: (state, action: PayloadAction<number>) => { state.splice(action.payload, 1); },
    completeTask: (state, action: PayloadAction<number>) => { state[action.payload].completed = true; }
  }
})

export const { addTask, removeTask, completeTask } = todoListSlice.actions;
export const todoListReducer = todoListSlice.reducer;
