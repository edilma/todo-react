
import { useState } from 'react';
import './App.css';
import AddNewTask from './components/AddNewTask.jsx';
import TasksList from './components/TasksList.jsx';


function App() {
  const[tasks, setTasks] = useState();

  return(
    <div className="App">
     <h1>Hello</h1>
      <TasksList tasks={tasks}  setTasks={setTasks}/>
      <AddNewTask setTasks={setTasks}/>
    </div>
  );
}

export default App;
