const AddNotesModal = ({
  isModalOpen,
  setIsModalOpen,
  taskInput,
  setTaskInput,
  noteInput,
  setNoteInput,
  handleSubmit,
  isValid,
}) => {
  if (!isModalOpen) return null;
  const charLimit = 60;

  const handleChange = (e) => {
    const text = e.target.value;
    if (text.length <= charLimit) {
      setTaskInput(e.target.value);
    } else {
      console.warn(`Note exceeds ${charLimit} characters!`);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl shadow-xl p-6 w-96 md:w-[32rem] max-h-[80vh] overflow-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-gray-800">Add New Note</h2>
          <button
            onClick={() => setIsModalOpen(false)}
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
        <form onSubmit={handleSubmit} className="flex flex-col gap-2">
          <input
            type="text"
            value={taskInput}
            onChange={handleChange}
            placeholder="SwiftUI navigation"
            className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-700 font-semibold placeholder:text-gray-400 placeholder:font-normal"
          />

          <small className="pl-2 text-xs text-gray-400">
            <span className="inline-block w-4 text-right">
              {charLimit - taskInput.length}
            </span>
            <span> / {charLimit}</span>
          </small>

          <textarea
            value={noteInput}
            onChange={(e) => setNoteInput(e.target.value)}
            placeholder="More info..."
            className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-y mt-2"
            rows="8"
          />
          <button
            disabled={!isValid}
            type="submit"
            className={`rounded-lg py-2 px-4 mt-4 transition ${
              isValid
                ? "bg-indigo-600 text-white hover:bg-indigo-700"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
          >
            Create
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddNotesModal;
