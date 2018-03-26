'use strict';

import React from 'react';
import TodoForm from '../todo-form';

class TodoList extends React.Component {
  render() {
    return (
      <section className='todo-list'>
        <ul>
          {this.props.todos.map((item, i) => {
            return <li key={i}>
              <button onClick={() => this.props.todoRemove(item)}>X</button>

              <div>
                <p>title: {item.title}</p>
                <p>content: {item.content} </p>
              </div>

              <TodoForm
                todo={item}
                submitTitle='update'
                handleSubmit={(todo) => {
                  todo.id = item.id;
                  this.props.todoUpdate(todo);
                }}
              />
            </li>;
          })}
        </ul>
      </section>
    );
  }
}

export default TodoList;