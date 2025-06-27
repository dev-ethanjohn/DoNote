import { Trash2 } from "lucide-react"; // Make sure to install lucide-react or use an SVG

const Note = () => {
  return (
    <div className="max-w-md mx-auto h-72 bg-white border border-gray-200 rounded-3xl shadow-sm p-4 mb-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <input type="checkbox" className="w-5 h-5 accent-green-500" />
          <h2 className="text-lg font-medium text-gray-800">Buy groceries</h2>
        </div>

        <button className="text-gray-400 hover:text-red-500 transition">
          <Trash2 size={20} />
        </button>
      </div>

      <p className="mt-2 text-sm text-gray-600">
        Don’t forget eggs, milk, and bread. Check expiration dates!
      </p>
    </div>
  );
};

export default Note;
