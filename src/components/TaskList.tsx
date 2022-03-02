import React from "react";
import { useAppDispatch, useAppSelector } from "../store";
import { completeTask, removeTask } from "../modules/todoListSlice";

export const TaskList: React.FC = () => {
  const dispatch = useAppDispatch();
  const state = useAppSelector(state => state);

  const taskItems = state.tasks
    .filter(task => {
      switch (state.filter) {
        case 'all': return true;
        case 'todo': return !task.completed;
        case 'completed': return task.completed;
      }
    })
    .map((task, index) => 
      <li>
        <button onClick={_ => dispatch(completeTask(index))}>完了</button>
        <button onClick={_ => dispatch(removeTask(index))}>削除</button>
        {task.text + ' ' + (task.completed ? '(完了)' : '(未完了)')}
      </li>
    );

  return (
    <ul>
      {taskItems}
    </ul>
  )
}