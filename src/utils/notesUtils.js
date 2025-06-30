const STORAGE_KEY = "Do Notes";

const defaultNotes = [
  {
    id: 1,
    task: "Test note",
    note: "This description is for testing purposes only",
    completed: false,
    date: new Date().toISOString(),
  },
];

// store
export const saveNotes = (notes) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(notes));
  } catch (error) {
    console.error("Error saving notes to localStorage:", error);
  }
};

// read / retrive
export const getNotes = () => {
  try {
    const storedNotes = localStorage.getItem(STORAGE_KEY);
    return storedNotes ? JSON.parse(storedNotes) : defaultNotes;
  } catch (error) {
    console.error("Error reading notes from localStorage:", error);
    return defaultNotes;
  }
};

// utiolity func for notes specific crud (DETAIL)

export const getNoteById = (id) => {
  const notes = getNotes();
  return notes.find((note) => note.id === parseInt(id));
};

export const addNote = (title, noteContent) => {
  const notes = getNotes();
  const newNote = {
    id: Date.now(),
    title: title,
    note: noteContent,
    completed: false,
    date: new Date().toISOString(),
  };
  const updatedNotes = [...notes, newNote];
  saveNotes(updatedNotes);
  return newNote;
};

// individual note
export const updateNote = (id, updates) => {
  const notes = getNotes();
  const updatedNotes = notes.map((note) =>
    // merge new update by overwrite (...updates)
    note.id === parseInt(id) ? { ...note, ...updates } : note
  );
  saveNotes(updatedNotes);
  return updatedNotes.find((note) => note.id === parseInt(id));
};

export const deleteNote = (id) => {
  const notes = getNotes();
  const updatedNotes = notes.filter((note) => note.id !== parseInt(id));
  saveNotes(updatedNotes);
  return updatedNotes;
};
