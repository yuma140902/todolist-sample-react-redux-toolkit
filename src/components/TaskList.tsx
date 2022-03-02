import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../state";
import { completeTask, removeTask } from "../todolist/actionCreators";

export const TaskList: React.FC = () => {
  const dispatch = useDispatch();
  const state = useSelector((state: AppState) => state);

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