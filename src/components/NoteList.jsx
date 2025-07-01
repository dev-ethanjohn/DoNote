import { useEffect, useState } from "react";
import { addNote, deleteNote, getNotes } from "../utils/notesUtils";
import AddNotesButton from "./AddNotesButton";
import AddNotesModal from "./modal/AddNotesModal";
import DeleteNotesModal from "./modal/DeleteNotesModal";

import Note from "./Note";

const NoteList = () => {
  //  for button
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [todoToDelete, setTodoToDelete] = useState(null);

  // inputs
  const [titleInput, setTitleInput] = useState("");
  const [noteInput, setNoteInput] = useState("");

  const [todos, setTodos] = useState([]);

  useEffect(() => {
    setTodos(getNotes());
  }, []);

  const onDelete = (idToDelete) => {
    const updatedNotes = deleteNote(idToDelete);
    setTodos(updatedNotes);
    setTodoToDelete(null); // close modal
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (titleInput.trim().length >= 3) {
      const newNote = addNote(titleInput, noteInput);
      setTodos((prev) => [...prev, newNote]);
    }

    setTitleInput("");
    setNoteInput("");
    setIsModalOpen(false);
  };

  const isValid = titleInput.trim().length >= 3;

  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-4 pb-24 relative">
      {todos.length === 0 ? (
        <div className="flex items-center justify-center h-[60vh] col-span-full">
          <p className="text-gray-500 text-center">
            No written notes yet. Add one!
          </p>
        </div>
      ) : (
        todos.map(({ id, title, note, completed, date }) => (
          <Note
            key={id}
            id={id}
            title={title}
            note={note}
            completed={completed}
            onDeleteRequest={() => setTodoToDelete(id)}
            date={date}
          />
        ))
      )}
      <AddNotesButton setIsModalOpen={setIsModalOpen} />
      <AddNotesModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        titleInput={titleInput}
        setTitleInput={setTitleInput}
        noteInput={noteInput}
        setNoteInput={setNoteInput}
        handleSubmit={handleSubmit}
        isValid={isValid}
      />

      <DeleteNotesModal
        isOpen={todoToDelete !== null}
        todoId={todoToDelete}
        onConfirm={onDelete}
        onCancel={() => setTodoToDelete(null)}
      />
    </div>
  );
};

export default NoteList;
