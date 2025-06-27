import { useState } from "react";
import AddTodoButton from "./AddTodoButton";
import AddTodoModal from "./AddTodoModal";
import Note from "./Note";

const NoteList = () => {
  //  for button
  const [isModalOpen, setIsModalOpen] = useState(false);

  // inputs
  const [taskInput, setTaskInput] = useState("");
  const [noteInput, setNoteInput] = useState("");

  const [todos, setTodos] = useState([
    {
      id: 1,
      task: "Test task",
      note: "This note is for testing purposes only",
      completed: false,
    },
  ]);

  const onDelete = (idToDelete) => {
    const updatedTodos = todos.filter((todo) => todo.id !== idToDelete);
    setTodos(updatedTodos);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (taskInput.trim().length >= 3) {
      setTodos(() => [
        ...todos,
        { id: Date.now(), task: taskInput, note: noteInput, completed: false },
      ]);
    }

    setTaskInput("");
    setNoteInput("");
    setIsModalOpen(false);
  };

  const isValid = taskInput.trim().length >= 3;

  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-4 relative">
      {todos.length === 0 ? (
        <p className="text-gray-500 text-center col-span-full">
          No tasks yet. Add one!
        </p>
      ) : (
        todos.map((todo) => (
          <Note
            key={todo.id}
            task={todo.task}
            note={todo.note}
            completed={todo.completed}
            onDelete={() => onDelete(todo.id)}
          />
        ))
      )}
      <AddTodoButton setIsModalOpen={setIsModalOpen} />
      <AddTodoModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        taskInput={taskInput}
        setTaskInput={setTaskInput}
        noteInput={noteInput}
        setNoteInput={setNoteInput}
        handleSubmit={handleSubmit}
        isValid={isValid}
      />
    </div>
  );
};

export default NoteList;
