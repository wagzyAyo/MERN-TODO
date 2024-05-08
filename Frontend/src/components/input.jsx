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
            <input 
            className="rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            type="text" name="task" placeholder="Enter task" onChange={handleTask} value={task} />
                <Fab color="primary" aria-label="add" onClick={handleSubmit}>
                    <AddIcon />
                </Fab>
        </div>
    )
}

Input.propTypes = {
    addTask: PropTypes.func.isRequired
}

export default Input
