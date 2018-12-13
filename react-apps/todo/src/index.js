import React from 'react';    // подключаем библитеку react
import ReactDOM from 'react-dom';    // подключаем библитеку react-dom

const TodoList = () => {
  return (
    <ul>
      <li>Learn React</li>
      <li>Build Awesome App</li>
    </ul>
  )
};

const AppHeader = () => {
  return (
    <h1>My Todo list</h1>
  )
};

const SearchPanel = () => {
  return <input type="text" placeholder="search" />
};

const App = () => {
  return (
    <div>
      <AppHeader />
      <SearchPanel />
      <TodoList />
    </div>
  )
};

ReactDOM.render(<App/>, document.getElementById('root'));