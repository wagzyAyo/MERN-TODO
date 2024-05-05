import { useState } from "react"
import Input from "./input"

function App(){
 const [taskList, setTaskList] = useState([]);

 function handleAddTask(task){
  setTaskList(prevTasks => [...prevTasks, task]);
 }
  

  return <div>
    <Input addTask={handleAddTask}/>

    {taskList.map((task, index) => (
      <div key={index}>{task}</div>
    ))}
  </div>
}


export default App
