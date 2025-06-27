import Note from "./Note";

const NoteList = () => {
  return (
    <div className="grid grid-cols-[repeat(auto-fill,_minmax(300px,_1fr))] gap-4 justify-start">
      <Note />
      <Note />
      <Note />
    </div>
  );
};

export default NoteList;
