import React from 'react';
import PropTypes from 'prop-types';
import css from './TodoHeader.css';

const TodoHeader = ({ onChangeText, onCreateTodo, todo }) => (
  <div className={css.todoHeader}>
    <form className="form-inline">
      <div className="form-group">
        {/* <label className="sr-only" htmlFor="exampleInputAmount">
        Amount
        </label> */}
        <div className={`${css.inputGroup} input-group`}>
          <span className="input-group-addon">
            待办项
          </span>
          <input value={todo.get('text')} onChange={onChangeText} type="text" className="form-control" id="exampleInputAmount" placeholder="xxx" />
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
  todo: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default TodoHeader;
