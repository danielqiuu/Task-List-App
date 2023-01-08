import React, { useState } from 'react'
import CloseIcon from '@mui/icons-material/Close';
import {TextField, Button} from '@mui/material';
const ItemEditPopup = (props) => {
  const [itemTitle, setItemTitle] = useState(props.itemTitle);
  const [itemDesc, setItemDesc] = useState(props.itemDesc);

  const handleSaveClick = (e) => {
    props.setVisible(false)
    const newTask = {itemTitle, itemDesc}
    fetch(props.url+'/item/edit/' + props.id, {
      method: 'PUT',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(newTask)
    })
  }
  return (props.visible) ? (
    <div>
        <h3>Edit Task</h3>
        <TextField id="outlined-basic" label="Edit Title" variant="outlined" defaultValue={props.itemTitle} size="small" margin='normal' onChange={(e) => setItemTitle(e.target.value)}/>
        <br/>
        <TextField id="outlined-basic" label="Edit Description" variant="outlined" defaultValue={props.itemDesc} size="medium" onChange={(e) => setItemDesc(e.target.value)}/>
        <Button variant="outlined" onClick={handleSaveClick}>Save</Button>
        <CloseIcon onClick={() => props.setVisible(false)}/>
    </div>
    
  ) : "";
}

export default ItemEditPopup