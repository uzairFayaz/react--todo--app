import React, { useState } from "react";

const Todo = () => {
  const [inputValue, setInputValue] = useState("");
  const [task, setTask] = useState([]);

  const handleInputChange = (value) => {
    setInputValue(value);
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    if (!inputValue) return;
    if (task.some((t) => t.text === inputValue)) {
      setInputValue("");
      return;
    }
    setTask((prevTask) => [...prevTask, { text: inputValue, completed: false }]);
    setInputValue("");
  };

  const handleOnDelete = (index) => {
    const newtask = task.filter((_, i) => i !== index);
    setTask(newtask);
  };

  const handleOnTick = (index) => {
    const newtask = task.map((curTask, i) =>
      i === index ? { ...curTask, completed: !curTask.completed } : curTask
    );
    setTask(newtask);
  };

  const handleOnClearAll = () => {
    setTask([]);
  };

  return (
    <section className="bg-gray-100 min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
        <header className="mb-4">
          <h1 className="text-2xl font-bold text-center text-gray-700">Todo List</h1>
        </header>

        <form onSubmit={handleOnSubmit} className="flex flex-col sm:flex-row gap-2">
          <input
            type="text"
            autoComplete="off"
            value={inputValue}
            onChange={(event) => handleInputChange(event.target.value)}
            className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter a task"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
          >
            Add
          </button>
        </form>

        <ul className="mt-6 space-y-2">
          {task.map((curtask, index) => (
            <li
              key={index}
              className="flex justify-between items-center bg-gray-200 px-4 py-2 rounded-md"
            >
              <span className={`text-gray-700 ${curtask.completed ? "line-through" : ""}`}>
                {curtask.text}
              </span>
              <div className="flex gap-2">
                <button
                  onClick={() => handleOnDelete(index)}
                  className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 transition"
                >
                  Delete
                </button>
                <button
                  onClick={() => handleOnTick(index)}
                  className={`px-3 py-1 rounded-md text-sm font-medium ${
                    curtask.completed
                      ? "bg-gray-400 text-white"
                      : "bg-green-500 text-white"
                  } hover:opacity-90 transition`}
                >
                  {curtask.completed ? "Undo" : "Tick"}
                </button>
              </div>
            </li>
          ))}
        </ul>
        <div className="flex justify-center items-center">
          <button
            className="bg-blue-600 rounded-md text-center text-white mt-3 items-center text-sm "
            onClick={handleOnClearAll}
          >
            Clear All
          </button>
        </div>
      </div>
    </section>
  );
};

export default Todo;
