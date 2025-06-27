import { Trash2 } from "lucide-react";

const Note = (props) => {
  return (
    <div className="w-full h-72 bg-white border border-gray-200 rounded-3xl shadow-sm p-4 mb-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <input type="checkbox" className="w-5 h-5 accent-green-500" />
          <h2 className="text-lg font-medium text-gray-800">{props.task}</h2>
        </div>

        <button
          className="text-gray-400 hover:text-red-500 transition"
          onClick={props.onDelete}
        >
          <Trash2 size={20} />
        </button>
      </div>

      {props.note?.trim() && (
        <p className="mt-4 text-base text-gray-600">{props.note}</p>
      )}
    </div>
  );
};

export default Note;
