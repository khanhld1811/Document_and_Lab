import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoItem from './components/TodoItem';

class App extends Component {
  constructor() {
    super();
    this.todoItems = [
      'Cu lac gion tan',
      'O day chung toi khong lam nhu vay',
      'Chung toi khong co y kien gi voi viec lam cua ban'
    ]
  }

  render() {
    return (
      <div className="App">
        {
          this.todoItems.map((item, index) => <TodoItem key={index} title={item} />)
        }
      </div>
    )
  }
}

export default App;
