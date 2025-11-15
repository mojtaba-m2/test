import { useContext, useRef, useState } from "react";
import { AppContext } from "../App";

function TaskForm() {
  const { tasks, setTasks } = useContext(AppContext);
  const [nameTask, setNameTask] = useState({});

  const inputRef = useRef();

  function handlerTask(e) {
    setNameTask({
      id: tasks.length + 1,
      name: e.target.value,
    });
  }

  function handlerAddTask(e) {
    e.preventDefault();

    if (inputRef.current.value === "") {
      console.log("nnnooo");
    } else {
      setTasks((prvState) => [...prvState, nameTask]);
    }

    inputRef.current.value = "";
  }

  return (
    <div>
      <div className="bg-slate-400 w-80 flex justify-center mx-auto mt-10">
        <form className="flex flex-col py-5 w-full ">
          <input
            ref={inputRef}
            onChange={handlerTask}
            className="text-right m-4 p-1"
            type="text"
            placeholder="تسک را وارد کنید"
          />
          <button
            onClick={handlerAddTask}
            className="bg-red-500 text-slate-100 mx-auto p-1 rounded-md mt-8"
          >
            اضافه کردن
          </button>
        </form>
      </div>
    </div>
  );
}

export default TaskForm;
