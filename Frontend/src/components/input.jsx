import { useState } from "react"
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import PropTypes from "prop-types"


function Input(props){

    const [task, setTask] = useState("");

    function handleTask(event){
        const name = event.target.value;

        setTask(name)
    }

    function handleSubmit(){
        props.addTask(task);
        setTask(""); // Clear input after submitting
    }

    return (
        <div>
            <input type="text" name="task" placeholder="Enter task" onChange={handleTask} value={task}/>
                <Fab color="primary" aria-label="add">
                    <AddIcon onClick={handleSubmit}/>
                </Fab>
        </div>
    )
}

Input.propTypes = {
    addTask: PropTypes.func.isRequired
}

export default Input
