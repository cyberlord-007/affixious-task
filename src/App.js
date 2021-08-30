import React from 'react'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Login from './components/Login'
import ToDoList from './components/ToDoList'

function App() {
  return (
    <Router>
      <Route exact path='/' component={Login} />
      <Route exact path='/to-do' component={ToDoList} />
    </Router>
  );
}

export default App;
