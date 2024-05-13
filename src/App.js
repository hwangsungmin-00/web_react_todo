import './App.css';
import Todo from './Todo';
import React, {useState, useEffect} from 'react';
import { Container, List, Paper } from "@mui/material";
import AddTodo from './AddTodo';
import {call} from "./service/ApiService"
function App() {

  const [items, setItems] = useState([]);

  

  useEffect(()=>{
    call("/todo", "GET", null)
      .then(
        (response)=>
          setItems(response.data));
        },[]);

  const addItem = (item)=>{
    call("/todo", "POST", item)
    .then((response)=>setItems(response.data));
  };
  const deleteItem = (item)=>{
    call("/todo", "DELETE", item)
    .then((response)=>setItems(response.data));
  };

  const editItem = (item) => {
    call("/todo", "PUT", item)
      .then((response) => setItems(response.data));
  };




  //JSX 결과를 변수에 저장
  //let todoItems =items.length > 0 && items.map((item) => <Todo item={item} key={item.id}/>);

  // JSX 결과를 변수에 저장
  let todoItems = 
    items.length > 0 && (
      <Paper style={{margin: 16}}>
        <List>
          {items.map((item)=> 
          <Todo 
          item={item} 
          key={item.id} 
          editItem={editItem}
          deleteItem={deleteItem} />)}; 
        </List>
      </Paper>
    )
  //변수를 반환
  return (
    //<div className="App">
    //  <Todo item="공부하기"/>
    //  <Todo item="잠자기"/>
    //  <Todo item="운동하기"/>
    //</div>
    <div className="App">
      <Container maxWidth="md">
        <AddTodo addItem={addItem}/>
        {todoItems}
      </Container>
    </div>
  );
}

export default App;
