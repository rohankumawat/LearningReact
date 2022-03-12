import { List, ListItem, ListItemAvatar, ListItemText, Button } from '@material-ui/core';
import React from 'react';
import db from './firebase';
import './Todo.css';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

function Todo(props) {
  return (
    <List className='todo__list'>
        <ListItem>
            <ListItemAvatar>
            </ListItemAvatar>
            <ListItemText primary={props.todo.todo} secondary="Dummy Deadline" />
        </ListItem>
        <DeleteForeverIcon onClick={event=>db.collection('todos').doc(props.todo.id).delete()}></DeleteForeverIcon>
    </List>
    /*Button onClick={event=>db.collection('todos').doc(props.todo.id).delete()}>❌ Delete Me</Button>*/
    /*<div> <li>{props.text}</li> </div>*/
  )
}

export default Todo;