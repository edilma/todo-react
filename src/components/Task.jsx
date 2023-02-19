export default function Task({name}){
  
    return(<>
    
        <div className="task-flex-container">
        <p className=".flex-item:nth-child(1)">{name}</p>
        </div>
        <div className="flex-item:nth-child(2) ">
        <button>Delete</button>
        </div>
       
        </>
    )

}   