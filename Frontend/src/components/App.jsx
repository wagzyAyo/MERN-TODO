import { useState } from "react"
import Input from "./input"
import List from './list'

function App(){
 const [taskList, setTaskList] = useState([]);

 function handleAddTask(task){
  setTaskList(prevTasks => [...prevTasks, task]);
 }


 function handleDelete(id){
  setTaskList((prevList) =>{
    return prevList.filter((task, index) =>{
      return index !== id
    })
  })
 }
  
  return <div className="mt-6 grid justify-center" >
    <div style={{
    background: "#000",
    width: "400px",
    height: "auto",
    borderRadius: "30px",
    color: "#fff"
  }} className=" h-screen grid justify-center">
    <Input addTask={handleAddTask}/>

    {taskList.map((task, index) => (
      <List key={index} text={task} id={index} deleteTask= {handleDelete} />
    ))}
    </div>
  </div>
}


export default App
