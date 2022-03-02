import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type FilterState = 'all' | 'todo' | 'completed';

const initialState: FilterState = 'all';

const filterSlice = createSlice({
  name: 'filter',
  initialState: initialState as FilterState,
  reducers: {
    setFilter: (_state, action: PayloadAction<FilterState>) => action.payload
  }
})

export const { setFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
