'use strict';

import './_dashboard.scss';
import React from 'react';
import uuid from 'uuid/v1';
import TodoForm from '../todo-form';
import TodoList from '../todo-list';
import Navbar from '../navbar';
import Footer from '../footer';

let renderIf = (test, component) => test? component: undefined;

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      showErrors: true,
    };

    this.todoCreate = this.todoCreate.bind(this);
    this.todoUpdate = this.todoUpdate.bind(this);
    this.todoRemove = this.todoRemove.bind(this);
  }

  todoCreate(todo) {
    todo.id = uuid();
    let { app } = this.props;
    // let app = this.props.app
    app.setState(state => ({
      todoCount: state.todoCount + 1,
      todos: [ ...state.todos, todo],
    }));
  }

  todoRemove(todo) {
    let { app } = this.props;
    app.setState(prevState => ({
      todos: prevState.todos.filter((item) => {
        return item.id !== todo.id;
      }),
    }));
  }

  todoUpdate(todo) {
    let { app } = this.props;
    app.setState(prevState => ({
      todos: prevState.todos.map((item) => {
        return item.id === todo.id ? todo : item;
      }),
    }));
  }

  render() {
    console.log('props inside render: ', this.props);
    let { app } = this.props;
    return (
      <section className='dashboard-container'>
        <Navbar />

        <div>
          <p> Todos Left: {app.state.todoCount} </p>
          <p> Todos Completed: {app.state.todoDone} </p>
          % done: {}
        </div>

        <TodoForm handleSubmit={this.todoCreate} submitTitle='add note'/>
        <TodoList todoRemove={this.todoRemove} todoUpdate={this.todoUpdate} todos={app.state.todos} />

        <Footer />
      </section>
    );
  }
}

export default Dashboard;

// editing: false,
// completed: false,
