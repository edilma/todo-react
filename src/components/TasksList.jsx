import { useEffect, useState } from "react"
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
            <container>
            {!tasks
                ? <h3>You need create more tasks</h3>
                : <section >
                    
                    {tasks.map((item) => (<Task key={item.taskId}
                        taskName={item.task} />))}       
                </section>
            }
            </container>
        </article>
    )
}
