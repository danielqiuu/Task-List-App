import React, {useState} from 'react'
import { Paper, Checkbox } from '@mui/material'
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

    <div class="container p-2 pr-10 ">
    <div class="h-50 w-full rounded-lg bg-white m-4 p-3 outline outline-red-100">
        <div class="flex items-center justify-between border-b">
            <div class="p-3 text-gray-700 text-lg font-bold">{itemTitle}</div>
            <div class="p-3 flex">
              <div onClick={handleCheckClick} class="text-slate-800 hover:text-blue-600 text-sm bg-white hover:bg-slate-100 border border-slate-200 rounded-l-lg font-medium px-4 py-2 inline-flex space-x-1 items-center">
              <Checkbox checked={checked} onClick={handleCheckClick}/>
              </div>
                <button onClick={handleDeleteClick} class="text-slate-800 hover:text-blue-600 text-sm bg-white hover:bg-slate-100 border border-slate-200 rounded-r-lg font-medium px-4 py-2 inline-flex space-x-1 items-center">
                    <DeleteIcon class="w-4 h-4"/>
                    <span>Delete</span>
                </button>
            </div>
        </div>
        <div class="p-3 text-lg text-gray-600">
            {itemDesc}
        </div>
        <button onClick={handleEditClick} class="text-slate-800 hover:text-blue-600 text-sm bg-white hover:bg-slate-100 border border-slate-200 rounded-l-lg rounded-r-lg font-medium px-4 py-2 inline-flex space-x-1 items-center">
                    <EditIcon class="w-4 h-4"/>
                    <span>Edit</span>
        </button>
        <ItemEditPopup visible={popupVisible} setVisible={setPopupVisible} id={itemId}itemTitle={itemTitle} itemDesc={itemDesc} url={url}></ItemEditPopup>
    </div>
</div>

    
  )
}

export default Item