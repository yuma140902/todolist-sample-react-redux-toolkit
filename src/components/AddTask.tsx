import React, { useState } from 'react'
import { useAppDispatch } from '../store';
import { addTask } from '../modules/todoListSlice';

export const AddTask: React.FC = () => {
  const [text, setText] = useState('');
  const dispatch = useAppDispatch();
  return (
    <>
      <input type='text' value={text} onChange={e => setText(e.target.value)}/>
      <button onClick={_ => {
        dispatch(addTask(text));
        setText('');
      }}>追加</button>
    </>
  )
}