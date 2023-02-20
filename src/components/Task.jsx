import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";


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
        <Container className="SingleTask">
            <Row className="task-card">
                <Col className="task-description">
                    {task}
                </Col>
                <Col md="auto" className="button-delete">

                    <Button variant="primary"
                        size="large"
                        onClick={handleDelete}>DELETE</Button>

                </Col>
                <Col className="task-done-checkbox" onClick={handleCompleteTask}>
                    <InputGroup size="sm" className="mb-3">
                        <InputGroup.Text id="inputGroup-sizing-sm">Done?</InputGroup.Text>
                        <InputGroup.Checkbox
                        type="checkbox"
                        checked={done}
                        
                        label="PROCESS COMPLETED"
                    />
                    </InputGroup>
                    

                </Col>
            </Row>

        </Container>
    </>
    )

}   