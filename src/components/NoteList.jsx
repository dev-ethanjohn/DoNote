import { useState } from "react";
import AddNotesButton from "./AddNotesButton";
import AddTodoModal from "./modal/AddTodoModal";
import DeleteTodoModal from "./modal/DeleteTodoModal";
import Note from "./Note";

const NoteList = () => {
  //  for button
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [todoToDelete, setTodoToDelete] = useState(null);

  // inputs
  const [taskInput, setTaskInput] = useState("");
  const [noteInput, setNoteInput] = useState("");

  // confetti
  const [todos, setTodos] = useState([
    {
      id: 1,
      task: "Test task",
      note: "This note is for testing purposes only",
      completed: false,
      date: new Date().toISOString(),
    },
  ]);

  const onDelete = (idToDelete) => {
    const updatedTodos = todos.filter((todo) => todo.id !== idToDelete);
    setTodos(updatedTodos);
    setTodoToDelete(null); //close modal
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (taskInput.trim().length >= 3) {
      setTodos(() => [
        ...todos,
        {
          id: Date.now(),
          task: taskInput,
          note: noteInput,
          completed: false,
          date: new Date().toISOString(),
        },
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
        todos.map(({ id, task, note, completed, date }) => (
          <Note
            key={id}
            id={id}
            task={task}
            note={note}
            completed={completed}
            onDeleteRequest={() => setTodoToDelete(id)}
            date={date}
          />
        ))
      )}
      <AddNotesButton setIsModalOpen={setIsModalOpen} />
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

      <DeleteTodoModal
        isOpen={todoToDelete !== null}
        todoId={todoToDelete}
        onConfirm={onDelete}
        onCancel={() => setTodoToDelete(null)}
      />
    </div>
  );
};

export default NoteList;
