import { useContext } from "react";
import TaskItem from "./TaskItem";
import { AppContext } from "../App";

function TaskList() {
  const { tasks } = useContext(AppContext);

  console.log(tasks);

  return (
    <div>
      <div className="w-80 mx-auto">
        <ul>
          {tasks.map((task) => (
            <TaskItem key={task.id} id={task.id} name={task.name} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TaskList;
