/**
 * redux-actions，它可以方便我们使用 Flux Standard Action 格式的 action
 */
import { createAction } from 'redux-actions';
import actionType from '../constants/actionTypes';

// 也可createAction(type.MOVIE_LIST, actions.movieList)
export const createTodo = createAction(actionType.CREATE_TODO);// 在这里先指定action type, 在reducer中指定具体 fn
export const deleteTodo = createAction(actionType.DELETE_TODO);
export const changeText = createAction(actionType.CHANGE_TEXT);
