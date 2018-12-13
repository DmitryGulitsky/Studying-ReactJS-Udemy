import React from 'react';    // подключаем библитеку react
import ReactDOM from 'react-dom';    // подключаем библитеку react-dom

import AppHeader from './components/appHeader'
import TodoList from './components/toDoList'
import SearchPanel from './components/searchPanel'


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