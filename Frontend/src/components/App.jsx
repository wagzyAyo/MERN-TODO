import { useState } from "react"
import Input from "./input"
import List from './list'

function App(){
 const [taskList, setTaskList] = useState([]);

 function handleAddTask(task){
  setTaskList(prevTasks => [...prevTasks, task]);
 }
  

  return <div className="h-screen flex  justify-center mt-6">
    <Input addTask={handleAddTask}/>

    {taskList.map((task, index) => (
      <List key={index} text={task} id={index}/>
    ))}
  </div>
}


export default App
