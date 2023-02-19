export default function Task({ data, setTasks }) {
    //here i need props (task name, if it is done and the id)

    const { taskId, task, done } = data;
    const handleDelete = () => {
        fetch(`https://todo-api-er.web.app/tasks/${taskId}`
            , {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                }
            }
        )
            .then(res => res.json())
            .then(setTasks)
            .catch(console.error)
    }

    const handleCompleteTask = ()=>{
        
        fetch(`https://todo-api-er.web.app/tasks/${taskId}`
            , {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({done:!!!done})
            }
        )
            .then(res => res.json())
            .then(setTasks)
            .catch(console.error)

    }

    return (<>

        <div >
            {task}
        </div>
        <div >
            <button onClick={handleDelete}>Delete</button>
            <label> Task Completed
            <input 
            type="checkbox" 
            checked={done}
            onChange={handleCompleteTask} />
            </label>

        </div>

    </>
    )

}   