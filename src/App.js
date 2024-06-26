import './App.css';
import Todo from './Todo';
import React, {useState, useEffect} from 'react';
import { Container, List, Paper, Grid, Button, AppBar, Toolbar, Typography } from "@mui/material";
import AddTodo from './AddTodo';
import {call, signout} from "./service/ApiService"
function App() {

  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  

  useEffect( () => {
    call("/todo", "GET", null)
      .then( (response) => {
        setItems(response.data);
        setLoading(false);
      });
  }, [] );

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

    let navigationBar = (
      <AppBar position="static">
        <Toolbar>
          <Grid justifyContent="space-between" container>
            <Grid item>
              <Typography variant='h6'>오늘의 할일</Typography>
            </Grid>
            <Grid item>
              <Button color="inherit" raised onClick={signout}>
                로그아웃
              </Button>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    );
  
    let todoListPage = (
      <div>
        {navigationBar}
        <Container maxWidth="md">
          <AddTodo addItem={addItem} />
          <div className="App">
            {todoItems}
          </div>
        </Container>
      </div>
    );
  
    let loadingPage = <h1>로딩 중...</h1>
  
    let content = loadingPage;
  
    if(!loading) {
      content = todoListPage;
    }
  //변수를 반환
  return (
    //<div className="App">
    //  <Todo item="공부하기"/>
    //  <Todo item="잠자기"/>
    //  <Todo item="운동하기"/>
    //</div>
    <div className="App">
      {content}
    </div>
  );
}

export default App;
