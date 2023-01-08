import React, {useState} from 'react'
import { Paper, Checkbox, Button } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
const Item = ({url, itemId, itemTitle, itemDesc, isCompleted}) => {
    const [checked, setChecked] = useState(isCompleted === 'true');
    const handleCheckClick = (e) => {
      setChecked(!checked)
      e.preventDefault();
      const task = {itemTitle, itemDesc, checked};
      console.log(JSON.stringify(task));
      fetch(url+'/item/complete/' + itemId, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(task)
      })

    }
    const handleDeleteClick = (e) => {

      fetch(url+'/item/delete/' + itemId,{
        method: 'DELETE',
        headers: {'Content-Type': 'application/json'}
      })
    }
  return (
    
    <div>
        <Paper 
        elevation={6}
        style={{ margin: "10px", padding: "15px", textAlign: "left" }}
        key={itemId}
        >
            Id: {itemId}
            
            <br/>
            Task Title: {itemTitle}
            <br/>
            Description: {itemDesc}
            <br/>
            
            Complete?: 
            <Checkbox checked={checked} onClick={handleCheckClick}/>
            <br/>
            <DeleteIcon onClick={handleDeleteClick}/>
        </Paper>
    </div>
  )
}

export default Item