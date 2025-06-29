import { Edit3, Trash2 } from "lucide-react";

const Note = (props) => {
  const formattedDate = new Date(props.date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div className="w-full h-80 bg-white border border-gray-200 rounded-3xl shadow-[0_2px_2px_rgba(0,0,0,0.34)] p-4 mb-4 flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <h2 className="text-lg font-medium text-gray-800">{props.task}</h2>
          </div>
          <button
            className="text-gray-400 hover:text-red-500 hover:scale-110 hover:rotate-6 transition transform"
            onClick={() => props.onDeleteRequest(props.id)}
            aria-label="Delete todo"
          >
            <Trash2 size={20} />
          </button>
        </div>

        {props.note?.trim() && (
          <p className="mt-4 text-base text-gray-600 line-clamp-[9]">
            {props.note}
          </p>
        )}
      </div>

      <div className="flex items-center justify-between">
        <small className="text-xs text-gray-400 mt-2 text-left">
          {formattedDate}
        </small>

        <button
          className="text-gray-400 hover:text-blue-500 hover:scale-110 transition transform"
          aria-label="Edit todo"
        >
          <Edit3 size={20} />
        </button>
      </div>
    </div>
  );
};

export default Note;
