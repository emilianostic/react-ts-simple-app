import { useState } from "react";
import "./App.css";
import { Task } from "./interfaces/Task";
import TaskList from "./components/TaskList";
import AppProps from "./interfaces/App.interface";
import logo from "./logo.svg";
import TaskForm from "./components/TaskForm";

function App({ title }: AppProps) {
  const [tasks, setTasks] = useState<Task[]>([
    //le paso un arreglo de Task
    {
      id: 1,
      title: "Learn React",
      description: "Learn React",
      completed: false,
    },
  ]);
  return (
    // nav bar
    <div className="bg-dark text-white" style={{ height: "100vh" }}>
      <nav className="navbar navbar-dark bg-primary">
        <div className="container">
          <a href="/" className="navbar-brand">
            <img src={logo} alt="React logo" style={{ width: "4rem" }} />
            {title && <h1>{title}</h1>}
          </a>
        </div>
      </nav>

      <main className="container p-4">
        <div className="row">
          <div className="col-md-4">
            <TaskForm/> </div>
          <div className="col-md-8">
            <div className="row">
              <TaskList tasks={tasks} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
