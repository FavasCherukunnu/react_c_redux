import './App.css';
import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from 'react-redux';
import { store } from './app/store';
import { TodoListPage } from './pages/todoListPage';


//first create store and assign reducer to it
//the reducer come from slices, the slices has initial state(this is the value stored in storage)
// states are changing using dispatch.
// when the dispatch function is called, the selector method is automatically working and the state of component is updating

function App() {

  return (
        <Provider store={store}>
          <TodoListPage/>
        </Provider>
      
    );
}

export default App;
