
import { useState } from 'react';
import AddNewTask from './components/AddNewTask.jsx';
import TasksList from './components/TasksList.jsx';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import { Container } from 'react-bootstrap';
import manufactoringIcon from "./manufacturing.png"

function App() {
  const [tasks, setTasks] = useState();

  return (
    <Container>
      <img src={manufactoringIcon} />
      <h1>MANUFACTURING PROCESS CHECK LIST </h1>
      <section className='processes-display'>
        <TasksList tasks={tasks} setTasks={setTasks} />
      </section>
      <section className='create-new-process'>
        <AddNewTask setTasks={setTasks} />
      </section>
    </Container>
  );
}

export default App;
