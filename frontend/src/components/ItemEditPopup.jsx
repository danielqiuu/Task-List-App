import React, { useState } from 'react';
import {TextField} from '@mui/material';
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
<div class="p-4 rounded-lg bg-white shadow-md">
  <h3 class="text-lg font-medium text-gray-800 mb-4">Edit Task</h3>
  <TextField id="outlined-basic" label="Edit Title" variant="outlined" defaultValue={props.itemTitle} className="w-full mb-5" size="small" margin='normal' onChange={(e) => setItemTitle(e.target.value)}/>
  <TextField id="outlined-basic" label="Edit Description" variant="outlined" defaultValue={props.itemDesc} className="w-full mb-5" size="medium" onChange={(e) => setItemDesc(e.target.value)}/>
  <button onClick={handleSaveClick} class="mt-3 text-slate-800 hover:text-blue-600 text-sm bg-white hover:bg-slate-100 border border-slate-200 rounded-l-lg rounded-r-lg font-medium px-4 py-2 inline-flex space-x-1 items-center">
            <span>Save</span>
        </button>
</div>

    
  ) : "";
}

export default ItemEditPopup