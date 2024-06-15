import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import React from "react";

function ToDoItem({text,completed,changeCompleted,deleteItemAdvanced,index}){


    return(
        <React.Fragment>
            <input type="checkbox" checked={completed} onChange={() => changeCompleted(index)} />
            <li>{text}</li>
            <Button onClick={() => deleteItemAdvanced(index)}>X</Button>
        </React.Fragment>
    )
}

ToDoItem.propTypes = {
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    changeCompleted: PropTypes.func.isRequired,
    deleteItemAdvanced: PropTypes.func.isRequired,
    index: PropTypes.number.isRequired,
}

export default ToDoItem