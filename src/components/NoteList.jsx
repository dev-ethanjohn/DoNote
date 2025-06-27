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

  const handleSubmit = (e) => {
    e.preventDefault();

    setTaskInput("");
    setNoteInput("");
    setIsModalOpen(false);
  };

  return (
    <div className="grid grid-cols-[repeat(auto-fill,_minmax(300px,_1fr))] gap-4 justify-start relative">
      <Note />
      <Note />
      <Note />
      <AddTodoButton setIsModalOpen={setIsModalOpen} />
      <AddTodoModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        taskInput={taskInput}
        setTaskInput={setTaskInput}
        noteInput={noteInput}
        setNoteInput={setNoteInput}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default NoteList;
