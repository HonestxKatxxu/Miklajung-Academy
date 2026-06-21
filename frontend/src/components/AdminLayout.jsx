import { useNavigate } from "react-router-dom";

export default function AdminLayout({ children }) {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("adminToken");
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gray-100">

      {/* TOP BAR */}
      <div className="bg-blue-600 text-white px-6 py-4 flex justify-between items-center">
        <h1 className="font-bold text-lg">
          Miklajung Admin Panel
        </h1>

        <button
          onClick={logout}
          className="bg-red-500 px-4 py-2 rounded hover:bg-red-600"
        >
          Logout
        </button>
      </div>

      {/* CONTENT */}
      <div className="p-6">
        {children}
      </div>

    </div>
  );
}