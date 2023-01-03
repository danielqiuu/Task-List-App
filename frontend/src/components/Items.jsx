import React, { useState, useEffect } from 'react'
import { Box, Container } from '@mui/system';
import { Paper, TextField, Button } from '@mui/material'
import Item from './Item'
const Todo = () => {
  const url = 'http://localhost:8080';
  const paperStyle = { padding: "10px 20px", width: 600, margin: "20px auto" };
  const [itemTitle, setItemTitle] = useState('');
  const [itemDesc, setItemDesc] = useState('');
  const [items, setItems] = useState([]);
  const isCompleted = "false";
  const handleClick = (e) => {
    e.preventDefault();
    const task = { itemTitle, itemDesc, isCompleted };
    console.log(JSON.stringify(task));
    fetch(url+'/item/add', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(task)
    })
  }
  useEffect(() => {
    fetch(url+'/item/getAll')
    .then((res) => res.json())
    .then((result) => {
      setItems(result);
    })
  })
  return (
    <Container>
      <Paper elevation={3} style={paperStyle}>
        <h1> Add a task </h1>
        <Box          
          component='form'
          noValidate
          autoComplete='off'
          >
          <TextField
            id='outlined-basic'
            label='Task Title'
            variant='outlined'
            margin='dense'
            value={itemTitle}
            onChange={(e) => setItemTitle(e.target.value)}
          />
          <TextField
            id='outlined-basic'
            label='Task Description'
            variant='outlined'
            margin='normal'
            fullWidth
            multiline
            value={itemDesc}
            rows="5"
            onChange={(e) => setItemDesc(e.target.value)}
          />
          <Button variant='contained' onClick={handleClick}>
            Submit Task
          </Button>

        </Box>
      </Paper>

      <h1>ToDo List</h1>
      <Paper elevation={3} style={paperStyle}>
        {items.map((item) => (
          <Item itemId={item.id} itemTitle={item.itemTitle} itemDesc={item.itemDesc} isCompleted={item.completed.toString()}/>
        ))

        }

      </Paper>
    </Container>
  )
}

export default Todo