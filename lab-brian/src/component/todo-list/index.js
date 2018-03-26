'use strict';

import './_todo-list.scss';
import React from 'react';
import TodoForm from '../todo-form';

class TodoList extends React.Component {
  render() {
    return (
      <section className='todo-list'>
        <p className='title'>notes. </p>
        <ul>
          {this.props.todos.map((item, i) => {
            return <li key={i}>
              <button className='removeButton' onClick={() => this.props.todoRemove(item)}>X</button>

              <div>
                <p className='capitalize'> {item.title}</p>
                <p> - {item.content} </p>
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