import { useState } from "react";


export default function AddNewTask(setTasks){
    const [task, setTask] = useState;
    const  handleAddTask = (e)=>{
        const newTask = {
            task: task,
            done: false
        }
        setTask("")
        fetch(`https://todo-api-er.web.app/tasks`
        ,{method:"POST",
        headers:{
        "Content-Type": "application/json"
        },
        body: JSON.stringify(newTask)
    })
        .then(res=>res.json())
        .then(setTasks)
        .catch(console.error)

    }

    return(
        <container>
         <form onSubmit={handleAddTask}>
            <label htmlFor="task"> New Task
            <input 
            type="text"
            name="task"
            value={task}
            onChange={setTask}></input>
            </label>
            <input type="submit" value="Add New Task"   />

         </form>
        </container>

    )
}