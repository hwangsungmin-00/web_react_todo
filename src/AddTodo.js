import React, {useState} from "react";
import {Button, Grid, TextField} from "@mui/material";

const AddTodo = (props) => {
    const [item, setItem] = useState({title: ""});


    const onInputChange = (e) => {
        setItem({title: e.target.value}); // item 상태 변수 값이 바뀌고 자동으로 리렌더링이 일어남
        console.log(item);
    }

    return(
        <Grid container style={{marginTop:20}}>
            <Grid xs={11} md={11} item style={{paddingRight:16}}>
                <TextField placeholder="Add Todo here" fullWidth 
                onChange={onInputChange} value={item.title} />
            </Grid>
            <Grid xs={1} md={1} item>
                <Button fullWidth style={{height:'100%'}} color="secondary" variant="outlined">
                    +
                </Button>
            </Grid>
        </Grid>
    )
}

export default AddTodo;