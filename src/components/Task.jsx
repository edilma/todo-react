export default function Task({data, setTasks}){
    //here i need props (task name, if it is done and the id)
    
    const {taskId, taskName, done} = data;
    const handleDelete = ()=>{
        fetch(`https://todo-api-er.web.app/tasks/${taskId}`
        ,{method:"DELETE",
        headers:{
        "Content-Type": "application/json"
        }}
        )
        .then(res=>res.json())
        .then(setTasks)
        .catch(console.error)
    }

    return(<>
    
        <div >
            <p >{data.taskName}</p>
        </div>
        <div >
            <button >Delete</button>
        </div>
       
        </>
    )

}   