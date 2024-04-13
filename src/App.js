import './App.css';
import Todo from './Todo';
import React, {useState} from 'react';
import { Container, List, Paper } from "@mui/material";
import AddTodo from './AddTodo';

function App() {

  const [items, setItems] = useState([{
    id:"0",
    title:"Hello World 1",
    done: true
  },
  {
    id:"1",
    title:"Hello World 2",
    done: false
  },
  {
    id:"2",
    title:"Hello World 3",
    done: false
  }]);

  const addItem = (item) => {
    item.id = "ID-" + items.length;
    item.done = false;
    setItems([...items, item]); // items 배열에 item 원소 추가
    console.log("items: ", items);
  }

  //JSX 결과를 변수에 저장
  //let todoItems =items.length > 0 && items.map((item) => <Todo item={item} key={item.id}/>);

  // JSX 결과를 변수에 저장
  let todoItems = 
    items.length > 0 && (
      <Paper style={{margin: 16}}>
        <List>
          {items.map((item)=> <Todo item={item} key={item.id} />)}; 
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
        <AddTodo/>
        {todoItems}
      </Container>
    </div>
  );
}

export default App;
