import React from 'react';
import TodoHeaderContainer from '../../containers/TodoHeaderContainer';
import TodoListContainer from '../../containers/TodoListContainer';
import css from './Main.css';
/**
 * Stateless Component，负责所有 View 的进入点
 */
const Main = () => (
  <div className={`${css.container}`}>
    <TodoHeaderContainer />
    <TodoListContainer />
  </div>
);

export default Main;
