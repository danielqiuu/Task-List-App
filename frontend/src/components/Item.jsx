import React, {useState} from 'react'
import { Paper, Checkbox, Button } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import ItemEditPopup from './ItemEditPopup';


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
    const handleEditClick = (e) => {
      setPopupVisible(true);
      console.log(popupVisible)
    }
    const [popupVisible, setPopupVisible] = useState(false);
  return (

    <div>
        <Paper 
        elevation={6}
        style={{ margin: "10px", padding: "15px", textAlign: "left" }}
        key={itemId}
        >
            Task Title: {itemTitle}
            <br/>
            Description: {itemDesc}
            <br/>
            
            Complete: 
            <Checkbox checked={checked} onClick={handleCheckClick}/>
            <br/>
            <DeleteIcon onClick={handleDeleteClick} style={{cursor:"pointer"}}/>
            <br/>
            <EditIcon onClick={handleEditClick}/>
            <ItemEditPopup visible={popupVisible} setVisible={setPopupVisible} id={itemId}itemTitle={itemTitle} itemDesc={itemDesc} url={url}></ItemEditPopup>
        </Paper>
    </div>
  )
}

export default Item