import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import './App.css';

function App() {
  const [todos, setTodos] = useState(["Do ReactJS projects.", "Do Python X C++ project.", "Learn JS."]); {/*We've set up a short term memory here!*/}
  const [input, setInput] = useState('');

  const addTodo = (event) => {
    // this will fire off when we click the button!
    event.preventDefault(); //It will stop the refresh
    console.log('👾', "I'm working!"); //Check if it's actually reaching there!
    setTodos([...todos, input])
    setInput(''); // clear up the input after clicking add todo button
  }

  return (
    <div className="App">
      <h1>Hello Dazzpool 🚀!</h1>
      <form>
        <input value={input} onChange={event => setInput(event.target.value)}/> {/*We need an input field here */}
        <Button type="submit" onClick={addTodo} variant="contained" color="primary">Add To-Do</Button>
        {/* <button type="submit" onClick={addTodo}>Add To-Do</button> We need To-Do button here  */}
      </form>
      

      <ul>
        {todos.map(todo => (
          <li>{todo}</li>
        ))}
      </ul>

    </div>
  );
}

export default App;