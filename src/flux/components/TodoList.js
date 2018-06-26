import React, { Component } from 'react';
import TodoStore from '../stores/TodoStore';

/* function getAppState() {
  return {
    todos: TodoStore.getTodos(),
  };
} */
class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
    };
  }

  componentDidMount() {
    TodoStore.addChangeListener(
      () => (
        this.setState({
          todos: TodoStore.getTodos(),
        })
      ),
    );
  }

  render() {
    const { todos } = this.state;
    return (
      <div>
        <ul>
          {
            todos.map((todo, key) => (
              <li key={key}>
                {todo}
              </li>
            ))
          }
        </ul>
      </div>
    );
  }
}

export default TodoList;
