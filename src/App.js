import React from 'react';
import TodoHeader from './components/TodoHeader.js';
import TodoMain from './components/TodoMain.js';
import TodoFooter from './components/TodoFooter.js';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: []
    }
  }
  addTodo = (todoItem) => {
    this.state.todos.push(todoItem)
    this.setState({
      todos: this.state.todos
    })
  }
  todoDelete = (key) => {
    console.log(key);
    this.state.todos.splice(key, 1)
    this.setState({
      todos: this.state.todos
    })
  }
  render() {
    const { todos } = this.state;
    let info = {
      todoCount: todos.length || 0,
      todos,
      todoDoneCount: (todos && todos.filter((todos) => todos.isDone)).length || 0
    }
    return (
      <div>
        <TodoHeader addTodo={this.addTodo} />
        <TodoMain {...info} todoDelete={this.todoDelete} />
        <TodoFooter />
      </div >
    )
  }

}

export default App;
