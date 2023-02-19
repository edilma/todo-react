import { useEffect } from "react"
import Task from "./Task.jsx"

export default function TasksList({tasks,setTasks}) {
   
    useEffect(() => {
        fetch(`https://todo-api-er.web.app/tasks`)
            .then(res => res.json())
            .then((x)=>{
                console.log(x)
                setTasks(x)
            })
            .catch(error => console.error)
    }, [setTasks])

    //console.log(tasks)

    return (
        <article>
            <h4>LIST OF TASKS - tasklist component
            </h4>
            <div>


            {!tasks
                ? <h3>You need create more tasks</h3>
                : <section >
                    
                    {tasks.map((item) => (<Task key={item.taskId} data={item} setTasks={setTasks}/>))}       
                </section>
            }
            </div>

        </article>
    )
}


 