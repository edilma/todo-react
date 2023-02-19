import { useEffect, useState } from "react"
import AddNewTask from "./AddNewTask.jsx";
import Task from "./Task.jsx"

export default function TasksList() {
    const [tasks, setTasks] = useState();

    useEffect(() => {
        fetch('https://todo-api-er.web.app/tasks')
            .then(res => res.json())
            .then(setTasks)
            .catch(error => console.error)
    }, [])


    return (
        <article>
            <h4>LIST OF TASKS - tasklist component
            </h4>
            <div className="container">
            {!tasks
                ? <h3>You need create more tasks</h3>
                : <section >
                    
                    {tasks.map((item) => (<Task data={item} setTasks={setTasks}/>))}       
                </section>
            }
            </div>
            <div className="container">
                console.log("the new task is going to be here")
                <AddNewTask setTasks ={setTasks}/>
                 </div>
        </article>
    )
}


 