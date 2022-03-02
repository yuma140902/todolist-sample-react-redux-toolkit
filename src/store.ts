import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { filterReducer } from "./modules/filterSlice";
import { todoListReducer } from "./modules/todoListSlice";

const store = configureStore({
  reducer: {
    filter: filterReducer,
    tasks: todoListReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

// 型付きの`useDispatch`と`useSelector`
// see: [Usage With TypeScript | Redux](https://redux.js.org/usage/usage-with-typescript)
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export default store