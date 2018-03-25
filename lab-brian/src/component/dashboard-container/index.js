'use strict';

import './_dashboard-container.scss';
import React from 'react';
import uuid from 'uuid/v1';

import TodoForm from '../todoForm-container';

class DashboardConatiner extends React.Component {
  constructor(props) {
    super(props);
    this.todoCreate = this.todoCreate.bind(this);
  }

  todoCreate(todo) {
    todo.id = uuid();
    this.props.app.setState(state => ({
      todoCount: state.todoCount + 1,
      todos: [ ...state.todos, todo],
    }));
  }

  render() {
    console.log('props inside render: ', this.props);
    return (
      <div className='dashboard-container'>
        <TodoForm handleToDoCreate={this.todoCreate} />
        { this.props.app.state.todos.length > 0 &&
        <ul>
          {this.props.app.state.todos.map( todo => {
            return <li key={todo.id}>{todo.title}: {todo.content} </li>;
          })}
        </ul>
        }
      </div>
    );
  }
}

export default DashboardConatiner;

// editing: false,
// completed: false,