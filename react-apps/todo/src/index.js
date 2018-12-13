import React from 'react';    // подключаем библитеку react
import ReactDOM from 'react-dom';    // подключаем библитеку react-dom

import AppHeader from './components/appHeader'
import TodoList from './components/toDoList'
import SearchPanel from './components/searchPanel'


const App = () => {

  const todoData = [
    { label: 'Drink Coffee', important: false, id: 1 },
    { label: 'Make Awesome App', important: true, id: 2 },
    { label: 'Have a lunch', important: false, id: 3 }
  ];

  return (
    <div>
      <AppHeader />
      <SearchPanel />
      <TodoList todos={todoData}/>
    </div>
  )
};

ReactDOM.render(<App/>, document.getElementById('root'));