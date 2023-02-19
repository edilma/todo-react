import { useState } from "react";
import { ReactDOM } from "react";


export default function AddNewTask({setTasks}) {
    const [newTask, setNewTask] = useState("");
    
    const handleAddTask = (e) => {
        e.preventDefault();
        const aNewTask = {
            task: newTask,
            done: false
        }
        
        fetch(`https://todo-api-er.web.app/tasks/`
            , {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(aNewTask)
            })
            .then(res => res.json())
            .then((x) => {
                setTasks(x) //updating the list of tasks
                setNewTask("")// clearing the new task
            })
            .then(x => {
                console.log("third then")
            })
            .catch(console.error)

    }

    return(
       
         <form onSubmit={handleAddTask}>
            <label htmlFor="task"> New Task
            <input 
            type="text"
            name="task"
            value={newTask}
            onChange={e=> setNewTask(e.target.value)}></input>
            </label>
            <input type="submit" value="Add New Task" />

         </form>
      

    )
}