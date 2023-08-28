import './App.css';
import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from 'react-redux';
import { store } from './app/store';
import { TodoListPage } from './pages/todoListPage';


function App() {

  return (
        <Provider store={store}>
          <TodoListPage/>
        </Provider>
      
    );
}

export default App;
