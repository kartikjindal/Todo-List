// import logo from './logo.svg';
import './App.css';
import React from 'react';
import { useState } from 'react';
// import Greet from './components/Greet1'

function App() {
  const [newItem, setnewItem] = useState('');
  const [todos, settodos] = useState([]);
  function handlesubmit(e) {
    e.preventDefault();
    settodos([...todos, { id: crypto.randomUUID(), name: newItem, completed: false }]);
    console.log(todos);
    setnewItem("");
  }
  function toggle(id, completed) {
    settodos(currenttodos => {
      return (currenttodos.map((todo) => {
        if (todo.id === id) {
          todo.completed = completed;
          return { ...todo, completed };
        }
        return todo;
      }))
    })
  }
  function deleteid(id){
      settodos(currenttodos=>{
        return currenttodos.filter(todo=> todo.id!=id)
      })
  }
  return (
    <div className="App">
      <form className='new-item-form' onSubmit={handlesubmit}>
        <div className='form-row'>
          <label htmlFor='item'>Add new item in todo list</label>
          <input type='text' value={newItem} onChange={(e) => { setnewItem(e.target.value) }} id='item' />
        </div>
        <button className='btn' > Add</button>
      </form>
      <h1>Todo list</h1>
      <ul className='list'>
        {todos.map((todo => {
          return <li key={todo.id}>
            <label>
              <input checked={todo.completed}
                onChange={
                  (e) => { toggle(todo.id, e.target.checked) }}
                type='checkbox' />
              {todo.name}
            </label>
            <button className='btn btn-danger' 
            onClick={
              ()=>deleteid(todo.id)
            }
              >Delete</button>
          </li>
        }
        ))

        }
      </ul>
    </div>
  );
}

export default App;
