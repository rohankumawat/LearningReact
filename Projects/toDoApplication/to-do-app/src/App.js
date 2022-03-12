import React, { useEffect, useState } from 'react';
import { Button, FormControl, InputLabel, Input } from '@material-ui/core';
import './App.css';
import Todo from './Todo.js';
import db from './firebase';
import firebase from 'firebase/compat/app';

function App() {
  const [todos, setTodos] = useState([]); {/*We've set up a short term memory here!*/}
  const [input, setInput] = useState('');

  // when the app loads, we need to listen to the database and fetch new todos as they get added/removed ... 
  useEffect(() => {
    // this code here ... fire when app.js loads up
    db.collection('todos').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      setTodos(snapshot.docs.map(doc => ({id: doc.id, todo: doc.data().todo})))
    })
  }, [])
  const addTodo = (event) => {
    // this will fire off when we click the button!
    event.preventDefault(); // it will stop the refresh
    /*console.log('👾', "I'm working!"); // Check if it's actually reaching there! */
    db.collection('todos').add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    });
    setTodos([...todos, input]);
    setInput(''); // clear up the input after clicking add todo button
  }

  return (
    <div className="App">
      <h1>Hello Dazzpool 🚀!</h1>
      <form>
        <FormControl>
          <InputLabel> ✔ Write a ToDo</InputLabel>
          <Input value={input} onChange={event => setInput(event.target.value)}></Input>
        </FormControl>
        {/* <input value={input} onChange={event => setInput(event.target.value)}/> We need an input field here */}
        <Button disabled={!input} type="submit" onClick={addTodo} variant="contained" color="primary">Add To-Do</Button>
        {/* <button type="submit" onClick={addTodo}>Add To-Do</button> We need To-Do button here  */}
      </form>
      

      <ul>
        {todos.map(todo => (
          <Todo todo={todo}/>
        ))}
      </ul>

    </div>
  );
}

export default App;