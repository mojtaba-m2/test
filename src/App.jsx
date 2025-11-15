import { createContext, useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

export const AppContext = createContext();

function App() {
  const [tasks, setTasks] = useState([]);

  return (
    <div>
      <AppContext.Provider value={{ tasks, setTasks }}>
        <TaskForm />
        <TaskList />
      </AppContext.Provider>
    </div>
  );
}

export default App;
