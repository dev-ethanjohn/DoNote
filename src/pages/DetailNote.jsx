import { ArrowLeft, Save, Trash2 } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import DeleteNotesModal from "../components/modal/DeleteNotesModal";
import { deleteNote, getNoteById, updateNote } from "../utils/notesUtils";

const DetailNote = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [note, setNote] = useState(null);
  const [editedTitle, setEditedTitle] = useState("");
  const [editedNote, setEditedNote] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const foundNote = getNoteById(id);
    if (foundNote) {
      setNote(foundNote);
      setEditedTitle(foundNote.title || "");
      setEditedNote(foundNote.note || "");
    } else {
      navigate("/");
    }
    setIsLoading(false);
  }, [id, navigate]);

  const handleSave = () => {
    if (editedTitle.trim().length >= 3) {
      const updatedNote = updateNote(parseInt(id), {
        title: editedTitle,
        note: editedNote,
      });
      setNote(updatedNote);
      navigate("/");
    }
  };

  const handleDelete = () => {
    setIsDeleteModalOpen(true);
  };

  const confirmDelete = () => {
    deleteNote(parseInt(id));
    navigate("/");
  };

  const cancelDelete = () => {
    setIsDeleteModalOpen(false);
  };

  if (isLoading || !note) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-500 text-lg mb-4">Loading...</p>
          {!note && (
            <>
              <p className="text-gray-500 text-lg mb-4">Note not found</p>
              <Link
                to="/"
                className="text-blue-500 hover:text-blue-600 underline"
              >
                Go back to notes
              </Link>
            </>
          )}
        </div>
      </div>
    );
  }

  const formattedDate = new Date(note.date).toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex items-center justify-between mb-8">
          <Link
            to="/"
            className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors"
          >
            <ArrowLeft size={20} />
            Back to your note list
          </Link>

          <div className="flex gap-2">
            <button
              onClick={handleSave}
              disabled={editedTitle.trim().length < 3}
              className="flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              <Save size={16} />
              Save
            </button>
            <button
              onClick={handleDelete}
              className="flex items-center gap-2 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
            >
              <Trash2 size={16} />
              Delete
            </button>
          </div>
        </div>

        {/* NOTE: CONTENT */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <input
            type="text"
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
            className="text-4xl font-bold text-gray-800 mb-4 w-full border-b-2 border-gray-200 focus:border-blue-500 outline-none bg-transparent"
            placeholder="Note title..."
          />

          <p className="text-gray-500 text-sm mb-8">{formattedDate}</p>

          <textarea
            value={editedNote}
            onChange={(e) => setEditedNote(e.target.value)}
            className="w-full h-96 p-4 border border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none resize-none text-gray-700 text-lg leading-relaxed"
            placeholder="Write your note here..."
          />
        </div>
      </div>

      <DeleteNotesModal
        isOpen={isDeleteModalOpen}
        onConfirm={confirmDelete}
        onCancel={cancelDelete}
        noteId={id}
      />
    </div>
  );
};

export default DetailNote;
