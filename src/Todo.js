import React, { useState } from 'react';
import { ListItem, ListItemText, InputBase, Checkbox, ListItemSecondaryAction, IconButton } from "@mui/material";
import DeleteOutlined from "@mui/icons-material/DeleteOutlined"

const Todo = (props) =>{
    // let item = props.item;

    const [item, setItem] = useState(props.item);
    const deleteItem = props.deleteItem
    const [readOnly, setReadOnly] = useState(true);
    const editItem = props.editItem;

    // turnOffReadOnly 함수 작성 
    const turnOffReadOnly=()=>{
        setReadOnly(false);
    }

    // turnOnReadOnly 함수 작성 
    const turnOnReadOnly=(e)=>{
        if(e.key=="Enter"){
            setReadOnly(true);
        }
    }

    const deleteEventHandler = () => {
        deleteItem(item);
    };

    const editEventHandler = (e)=>{
        item.title = e.target.value;
        editItem();
    }

    const checkboxEventHandler = (e) => {
        item.done = e.target.checked;
        editItem();
    }

    //let output= <div className="Todo"> {/* 주석 */}
    //                <input type="checkbox" id="todo0" name="todo0" value="todo0"></input>
    //                <label for="todo0">{item.id}{item.title}</label>
    //            </div>;
    //return (
    //    <div className='Todo'>
    //        <input
    //        type="checkbox"
    //        id={item.id}
    //        name={item.id}
    //        checked={item.done}
    //        />
    //        <label id={item.id}>{item.title}</label>
    //    </div>
    //);
    return(
        <ListItem>
            <Checkbox checked={item.done} 
                onChange={ checkboxEventHandler }/>
            <ListItemText>
                <InputBase
                    inputProps={{
                        "aria-label": "naked", 
                        readOnly: readOnly}}
                    onClick={turnOffReadOnly}
                    onKeyDown={turnOnReadOnly}
                    onChange={editEventHandler}
                    type="text"
                    id={item.id}
                    name={item.id}
                    value={item.title}
                    multiline={true}
                    fullWidth={true}
                />
            </ListItemText>
            <ListItemSecondaryAction>
                <IconButton aria-label="Delete Todo"
                onClick={deleteEventHandler}>
                    <DeleteOutlined />
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
    ) 
};

export default Todo;