import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";


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

    const handleCompleteTask = () => {

        fetch(`https://todo-api-er.web.app/tasks/${taskId}`
            , {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ done: !!!done })
            }
        )
            .then(res => res.json())
            .then(setTasks)
            .catch(console.error)

    }

    return (<>
        <section className="task-card">
            <div className="task-description">
                {task}
            </div>
            <div className="button-delete">
                <Button variant="primary" size="large" onClick={handleDelete}>DELETE</Button>
            </div>
            <div className="task-done-checkbox">
                <InputGroup.Checkbox
                    type="checkbox"
                    checked={done}
                    onChange={handleCompleteTask}
                    aria-label="PROCESS COMPLETED"
                />
            </div>
        </section>
    </>
    )

}   