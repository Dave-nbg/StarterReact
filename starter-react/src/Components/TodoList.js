import Button from "@mui/material/Button";
import React from 'react'
import ToDoItem from "./ToDoItem";
function ToDoList (){
    const [list, setList] = React.useState([{text: "test", completed: false},{text: "testje", completed: false}]);
    const [inputItem,setInputItem] = React.useState("");

    const buttonClick = () => {
        setList(list => [...list, {text: inputItem, completed: false}])
        setInputItem("");
    }

    // const deleteItem = (index) => {
    //     const copy = [...list]
    //     copy.splice(index,1)
    //     setList(copy)
    // }

    const deleteItemAdvanced = (index) => {
        setList(list.filter((item,i)=>index !== i));
    }

    const changeCompleted = (index) => {
        const newList = [...list];
        newList[index] = { ...newList[index], completed: !newList[index].completed };
        setList(newList)
    }


    return(
        <div>
            <label htmlFor={"ListItem"}>To do item</label>
            <input id={"ListItem"} value={inputItem} onChange={e => setInputItem(e.target.value)}/>
            <Button variant={"contained"} onClick={()=>buttonClick()}>Add Item</Button>

            <ul>
                {list.map((listItem,index)=>(
                    <div>
                        <ToDoItem index={index} text={listItem.text} completed={listItem.completed} changeCompleted={() => changeCompleted(index)} deleteItemAdvanced={() => deleteItemAdvanced(index)}/>
                        {/*<input type={"checkbox"} value={listItem.completed} onChange={()=>changeCompleted(index)}/>*/}
                        {/*<li>{listItem.text}</li>*/}
                        {/*<Button onClick={()=>deleteItemAdvanced(index)}>X</Button>*/}
                    </div>
                ))}
            </ul>
        </div>
    )

}

export default ToDoList