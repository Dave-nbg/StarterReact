import Button from "@mui/material/Button";
import React from 'react'
function ToDoList (){
    const [list, setList] = React.useState(["test","testje"]);
    const buttonClick = () => {
        setList(list => [...list, "test"])
    }

    const deleteItem = (index) => {
        const copy = [...list]
        copy.splice(index,1)
        setList(copy)
    }

    const deleteItemAdvanced = (index) => {
        setList(list.filter((item,i)=>index !== i));
    }


    return(
        <div>
            <label htmlFor={"ListItem"}>To do item</label>
            <input id={"ListItem"}/>
            <Button variant={"contained"} onClick={()=>buttonClick()}>Add Item</Button>

            <ul>
                {list.map((listItem,index)=>(
                    <div>
                        <li>{listItem}</li>
                        <Button onClick={()=>deleteItemAdvanced(index)}>X</Button>
                    </div>
                ))}
            </ul>
        </div>
    )

}

export default ToDoList