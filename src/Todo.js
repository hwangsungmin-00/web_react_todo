import React, { useState } from 'react';

const Todo = (props) =>{
    // let item = props.item;

    const [item, setItem] = useState(props.item);

    //let output= <div className="Todo"> {/* 주석 */}
    //                <input type="checkbox" id="todo0" name="todo0" value="todo0"></input>
    //                <label for="todo0">{item.id}{item.title}</label>
    //            </div>;
    return (
        <div className='Todo'>
            <input
            type="checkbox"
            id={item.id}
            name={item.id}
            checked={item.done}
            />
            <label id={item.id}>{item.title}</label>
        </div>
    );
};

export default Todo;