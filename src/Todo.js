import React, { useState } from 'react';
import { ListItem, ListItemText, InputBase, Checkbox } from "@mui/material";

const Todo = (props) =>{
    // let item = props.item;

    const [item, setItem] = useState(props.item);

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
            <Checkbox checked={item.done} />
            <ListItemText>
                <InputBase
                    inputProps={{"aria-label": "naked"}}
                    type="text"
                    id={item.id}
                    name={item.id}
                    value={item.title}
                    multiline={true}
                    fullWidth={true}
                />
            </ListItemText>
        </ListItem>
    ) 
};

export default Todo;