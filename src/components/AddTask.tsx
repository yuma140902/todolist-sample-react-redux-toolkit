import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTask } from '../todolist/actionCreators';

export const AddTask: React.FC = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();
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