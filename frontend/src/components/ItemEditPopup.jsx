import React, { useState } from 'react'
import CloseIcon from '@mui/icons-material/Close';
import {TextField, Button} from '@mui/material';
const ItemEditPopup = (props) => {

  return (props.visible) ? (
    <div>
        <h3>Edit Task</h3>
        <TextField id="outlined-basic" label="Edit Title" variant="outlined" defaultValue={props.itemTitle} size="small" margin='normal'/>
        <br/>
        <TextField id="outlined-basic" label="Edit Description" variant="outlined" defaultValue={props.itemDesc} size="medium"/>
        <Button variant="outlined">Save</Button>
        <CloseIcon onClick={() => props.setVisible(false)}/>
    </div>
    
  ) : "";
}

export default ItemEditPopup