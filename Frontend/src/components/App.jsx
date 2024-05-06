import { useState } from "react"
import Input from "./input"
import List from './list'

function App(){
 const [taskList, setTaskList] = useState([]);

 function handleAddTask(task){
  setTaskList(prevTasks => [...prevTasks, task]);



 }
  

  return <div className="h-screen grid mt-6 justify-center" >
    <div style={{
    background: "#000",
    width: "400px",
    height: "auto",
    borderRadius: "30px",
    color: "#fff"
  }}>
    <Input addTask={handleAddTask}/>

    {taskList.map((task, index) => (
      <List key={index} text={task} id={index}/>
    ))}
    </div>
  </div>
}


export default App
