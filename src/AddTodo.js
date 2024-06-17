import React, {useState} from "react";
import {Button, Grid, FlexField, TextField} from "@mui/material";

const AddTodo = (props) => {
    //사용자의 입력을 저장할 오브젝트
    const [item, setItem] = useState({title: ""});
    const addItem = props.addItem;

    //onButtonClick 함수 작성
    const onButtonClick = (event) => {
        addItem(item); //TextField의 onInputChange에 의해 업데이트된 item을 addItem에 넘겨준다.
        setItem({title: ""});
        
    }

    const enterKeyEventHandler = (e: React.KeyboardEvent) => {
        if (e.key === "Enter" && e.nativeEvent.isComposing === false){
            onButtonClick();
        }
    }


    /*onInputChange 함수 작성 
     Event타입의 e를 매개변수로 받는다.
     TextField 컴포넌트는 키보드 입력 이벤트가 발생할 때마다 onChange()함수를 실행하고, 입력된 키보드 값이 저장된 Event e를 넘긴다
     onInputChange를 이벤트핸들러 함수로 만들고, 그것을 TextField 컴포넌트에 연결시켰다. 그러면 이벤트가 발생할 때마다 onInputChange 
     이벤트 핸들러 함수가 실행된다.
     Event 오브젝트의 target.value에는 현재 화면의 인풋필드에 입력된 글자들이 담겨있다. */
    const onInputChange = (e) => {
        setItem({title: e.target.value});
        console.log(e.target.value);
        
    }

    //onInputChange 함수 TextField에 연결
    return (
        <Grid container style={{marginTop: 20}}>
            <Grid xs={11} md={11} item style={{paddingRight: 16}}>
                <TextField placeholder="Add Todo Here" 
                           fullWidth 
                           onChange={onInputChange} 
                           onKeyDown={enterKeyEventHandler}
                           value={item.title}
                />
            </Grid>
            <Grid xs={1} md={1} item>
                <Button fullWidth 
                style={{height: '100%'}} 
                color="secondary" 
                variant="outlined" 
                onClick={onButtonClick}>
                    +
                </Button>
            </Grid>
        </Grid>
    );
    

}

export default AddTodo;