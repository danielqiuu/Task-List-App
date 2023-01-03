import React, {useState} from 'react'
import { Paper, Checkbox } from '@mui/material'
const Item = ({itemId, itemTitle, itemDesc, isCompleted}) => {
    const [checked, setChecked] = useState(isCompleted);
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
            
            Complete?: {isCompleted}
            <Checkbox checked={checked}/>
        </Paper>
    </div>
  )
}

export default Item