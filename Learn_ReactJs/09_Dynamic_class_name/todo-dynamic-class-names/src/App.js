import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoItem from './components/TodoItem';

class App extends Component {
  constructor() {
    super();
    this.todoItems = [
      { title: 'Cu lac gion tan', isComplete: true },
      { title: 'O day chung toi khong lam nhu vay',isComplete: true },
      { title: 'Chung toi khong co y kien gi voi viec lam cua ban' }
    ]
  }

  render() {
    return (
      <div className="App">
        {
          this.todoItems.map((item, index) =>
            <TodoItem key={index} item={item} />
          )
        }
      </div>
    )
  }
}

export default App;
