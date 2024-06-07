import React from "react";
import {useState} from "react";
import {ListItem, ListItemText, InputBase, Checkbox, 
        ListItemSecondaryAction, IconButton} from "@mui/material";
import { DeleteOutlined, FastRewind } from "@mui/icons-material";

const Todo = (props) => {
    const [item, setItem] = useState(props.item);
    const [readOnly, setReadOnly] = useState(true);

    const deleteItem = props.deleteItem;
    const editItem = props.editItem;

    //deleteEventHandler
    const deleteEventHandler = () => {
        deleteItem(item);
    }

    const turnOffReadOnly = () => {
        setReadOnly(false);
    }

    const turnOnReadOnly = (e: React.KeyboardEvent) => {
        if (e.key === "Enter" && e.nativeEvent.isComposing === false && readOnly === false){
            setReadOnly(true);
            editItem(item);
        }
    }

    const editEventHandler = (e) =>{
        setItem({...item, title: e.target.value});
        /*item.title= e.target.value; //왜 여기선 setItems(title: e.target.value)로 안 하지?
        editItem();*/
    }

    const checkboxEventHandler = (e) => {
        item.done = e.target.checked; //checked되어있으면 true를 리턴.
        editItem(item);
    }

  
    return (
        <ListItem>
            <Checkbox checked = {item.done}
                      onChange={checkboxEventHandler}  />
            <ListItemText>
                <InputBase
                    inputProps = {{"aria-label": "naked",
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
    );
};

export default Todo;