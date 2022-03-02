import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../filter/actionCreators';
import { FilterState } from '../filter/state';
import { AppState } from '../state';

export const Filter: React.FC = () => {
  const dispatch = useDispatch();
  const currentFilter = useSelector((state: AppState) => state.filter);

  const renderFilter = (filter: FilterState, text: string) => {
    if (filter === currentFilter) {
      return <b>{text}</b>
    }
    return (
      <button  onClick={_ => dispatch(setFilter(filter))}>{text}</button>
    );
  }

  return (
    <>
      フィルター：
      {renderFilter('all', 'すべて')}&nbsp;
      {renderFilter('todo', '未完了')}&nbsp;
      {renderFilter('completed', '完了')}
    </>
  )
}