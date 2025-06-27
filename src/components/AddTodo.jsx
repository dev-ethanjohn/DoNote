import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const AddTodo = () => {
  const navigate = useNavigate();
  const [taskInput, setTaskInput] = useState("");
  const [noteInput, setNoteInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder for form submission logic
    navigate("/", { viewTransition: true }); // Return to Home
  };

  return (
    <>
      <Outlet /> {/* Renders the Home page content */}
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg shadow-xl p-6 w-80 md:w-96 max-h-[80vh] overflow-auto">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold text-gray-800">Add New Task</h2>
            <button
              onClick={() => navigate("/", { viewTransition: true })}
              className="text-gray-600 hover:text-gray-800"
              aria-label="Close modal"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="text"
              value={taskInput}
              onChange={(e) => setTaskInput(e.target.value)}
              placeholder="Task title"
              className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <textarea
              value={noteInput}
              onChange={(e) => setNoteInput(e.target.value)}
              placeholder="Optional note"
              className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-y"
              rows="4"
            />
            <button
              type="submit"
              className="bg-indigo-600 text-white rounded-lg py-2 px-4 hover:bg-indigo-700 transition"
            >
              Add Task
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddTodo;
