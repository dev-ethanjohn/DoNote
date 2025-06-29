const DeleteNotesModal = ({ isOpen, todoId, onConfirm, onCancel }) => {
  if (!isOpen) return null;

  const handleConfirm = () => {
    console.log("Item id being deleted:", todoId);
    onConfirm(todoId);
  };

  return (
    <div
      className="fixed inset-0 bg-black/50 bg-opacity-50 flex items-center justify-center z-50"
      role="dialog"
      aria-labelledby="delete-modal-title"
    >
      <div className="bg-white p-6 rounded-xl shadow-xl text-center">
        <h2 id="delete-modal-title" className="mb-4 text-gray-800">
          Confirm Deletion
        </h2>
        <p className="mb-4 text-gray-600">
          Are you sure you want to delete this note?
        </p>
        <div className="flex justify-center gap-4">
          <button
            className="px-4 py-2 bg-red-500 text-white rounded-xl hover:bg-red-600 transition"
            onClick={handleConfirm}
            aria-label="Confirm delete"
          >
            Delete
          </button>
          <button
            className="px-4 py-2 bg-gray-200 text-gray-800 rounded-xl hover:bg-gray-300 transition"
            onClick={onCancel}
            aria-label="Cancel delete"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteNotesModal;
