import React from 'react';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);

    let title = props.todo ? props.todo.title : '';
    let content = props.todo ? props.todo.content : '';

    this.state = { title, content };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    let {name, value, type } = e.target;
    // let name = e.target.name; let value = e.target.value
    this.setState({
      [name]: value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.handleSubmit(this.state);
  }

  render() {
    return (
      <form className='todo-form' onSubmit={this.handleSubmit}>
        <input
          name='title'
          type='text'
          value={this.state.title}
          onChange={this.handleChange}
        />
        <input
          name='content'
          type='text'
          value={this.state.content}
          onChange={this.handleChange}
        />
        <button type='submit'>{this.props.submitTitle}</button>
      </form>
    );
  }
}


export default TodoForm;