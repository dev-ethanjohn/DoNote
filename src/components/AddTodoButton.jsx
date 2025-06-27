const AddTodoButton = ({ setIsModalOpen }) => {
  return (
    <button
      onClick={() => setIsModalOpen(true)}
      className="fixed bottom-14 right-14 bg-indigo-600 text-white rounded-full w-20 h-20 flex items-center justify-center shadow-lg hover:bg-indigo-700 hover:scale-108 transition duration-300 ease-in-out z-50"
      aria-label="Add new note"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 4v16m8-8H4"
        />
      </svg>
    </button>
  );
};

export default AddTodoButton;
