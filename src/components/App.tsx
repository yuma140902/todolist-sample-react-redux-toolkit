import React from 'react'
import { AddTask } from './AddTask'
import { FilterSelector } from './FilterSelector'
import { TaskList } from './TaskList'

export const App: React.FC = () => {
  return (
    <>
      <FilterSelector />
      <TaskList />
      <AddTask/>
    </>
  )
}
