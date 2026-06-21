import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminLayout from "../components/AdminLayout";

export default function AdminDashboard() {
  const [messages, setMessages] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("adminToken");

    if (token !== "miklajung-admin-token") {
      navigate("/admin/login");
    }

    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    const res = await fetch("http://localhost:5000/api/messages");
    const data = await res.json();
    setMessages(data);
  };

  return (
    <AdminLayout>

      {/* HEADER SECTION */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800">
          Contact Messages
        </h2>
        <p className="text-gray-600">
          All messages submitted by users
        </p>
      </div>

      {/* STATS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">

        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-gray-500">Total Messages</h3>
          <p className="text-2xl font-bold">{messages.length}</p>
        </div>

      </div>

      {/* MESSAGES LIST */}
      <div className="grid gap-4">

        {messages.length === 0 ? (
          <p className="text-gray-500">No messages found</p>
        ) : (
          messages.map((msg) => (
            <div
              key={msg._id}
              className="bg-white p-4 rounded shadow border"
            >
              <h3 className="font-bold text-lg">{msg.name}</h3>
              <p className="text-sm text-gray-500">{msg.email}</p>
              <p className="mt-2 text-gray-700">{msg.message}</p>

              <p className="text-xs text-gray-400 mt-2">
                {new Date(msg.createdAt).toLocaleString()}
              </p>
            </div>
          ))
        )}

      </div>

    </AdminLayout>
  );
}