import { useState } from "react"
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

function Input(){

    const [task, setTask] = useState("");

    function handleTask(event){
        const name = event.target.value;

        setTask(name)
    }

    return (
        <div>
            <input type="text" name="task" placeholder="Enter task" onChange={handleTask} value={task}/>
            <Fab color="primary" aria-label="add">
            <AddIcon />
            </Fab>
        </div>
    )
}

export default Input