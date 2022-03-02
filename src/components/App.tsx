import React from 'react'
import { AddTask } from './AddTask'
import { Filter } from './Filter'
import { TaskList } from './TaskList'

export const App: React.FC = () => {
  return (
    <>
      <Filter />
      <TaskList />
      <AddTask/>
    </>
  )
}
