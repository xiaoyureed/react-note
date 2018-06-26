import React, { Component } from 'react';
import TodoActions from '../actions/todoActions';

class TodoHeader extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.onAdd = this.onAdd.bind(this);
    this.state = {
      text: '',
      // editing: false,
    };
  }

  onChange(event) {
    this.setState({
      text: event.target.value,
    });
  }

  onAdd() {
    const { text } = this.state;
    // 将text封装为action, 通过dispatcher注册
    // 本质就是解耦的思想
    TodoActions.addTodo(text);
    this.setState({
      text: '',
    });
  }

  render() {
    const { text } = this.state;
    return (
      <div>
        <h1>
        TodoFlux
        </h1>
        <div>
          <input
            value={text}
            type="text"
            placeholder="请输入代办事项"
            onChange={this.onChange}
          />
          <button
            type="button"
            onClick={this.onAdd}
          >
            送出
          </button>
        </div>
      </div>
    );
  }
}

export default TodoHeader;
