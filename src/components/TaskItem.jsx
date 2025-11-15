import { useContext } from "react";
import { AppContext } from "../App";

function TaskItem(props) {
  const { tasks, setTasks } = useContext(AppContext);

  function handlerRemove(e) {
    setTasks((prv) => [
      ...prv,
      setTasks(tasks.filter((tas) => tas.id !== e.target.id)),
    ]);

    console.log(tasks);
  }

  return (
    <li className=" border-2 my-8 p-2 flex justify-between flex-row-reverse">
      {/* <span>{` ${props.name} . ${props.id}`}</span> */}
      <div className="relative flex justify-center items-center">
        <span className="absolute right-0">{`.${props.id}`}</span>
        <span className="absolute right-4">{props.name}</span>
      </div>

      <button
        id={props.id}
        onClick={handlerRemove}
        className="bg-red-600 text-slate-100 px-1 rounded-md"
      >
        حذف
      </button>
      <input type="checkbox" />
    </li>
  );
}

export default TaskItem;
