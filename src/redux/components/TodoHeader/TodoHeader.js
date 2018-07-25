import React from 'react';
import PropTypes from 'prop-types';
import css from './TodoHeader.css';

const TodoHeader = ({ onChangeText, onCreateTodo, todo }) => (
  <div className={css.todoHeader}>
    <div>输入</div>
    <form className="form-inline">
      <div className="form-group">
        {/* <label className="sr-only" htmlFor="exampleInputAmount">
        Amount
        </label> */}
        <div className="input-group">
          <input value={todo.get('text')} onChange={onChangeText} type="text" className="form-control" id="exampleInputAmount" placeholder="Amount"/>
        </div>
      </div>
      <button onClick={onCreateTodo} type="button" className="btn btn-primary">
      发送
      </button>
    </form>
  </div>
);

TodoHeader.propTypes = {
  onChangeText: PropTypes.func.isRequired,
  onCreateTodo: PropTypes.func.isRequired,
  todo: PropTypes.object.isRequired,
};

export default TodoHeader;
