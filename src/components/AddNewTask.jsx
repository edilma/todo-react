import { useState } from "react";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

export default function AddNewTask({ setTasks }) {
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
            .catch(console.error)

    }

    return (

        <Container>
            <Form onSubmit={handleAddTask}>
                <Form.Group className="mb-3">
                <Row className="task-card">
                    <Col className="task-description">

                        <InputGroup size="lg">
                            <InputGroup.Text >Add a New Process</InputGroup.Text>
                            <Form.Control
                                type="text"
                                name="task"
                                value={newTask}
                                onChange={e => setNewTask(e.target.value)} />
                            <Button variant="primary" size="lg" type="submit">Add New Process</Button>
                        </InputGroup>
                    </Col>
                </Row>
                </Form.Group>

        </Form>
        </Container >

    )
}