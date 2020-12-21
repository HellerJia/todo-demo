import React from 'react';
import './App.scss';
import InputComponent from './InputComponent';
import TodoListComponent from './TodoListComponent';

export default class App extends React.Component {
  render() {
    return (
      <div className='todo-app'>
        <div className="title">Todo</div>
        <InputComponent />
        <TodoListComponent />
      </div>
    );
  }
}