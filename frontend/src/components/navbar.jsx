import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">

        {/* LOGO (IMAGE READY) */}
        <div className="flex items-center gap-2">

          {/* Replace this with your image later */}
          <img
            src="/logo.jpg"
            alt="Logo"
            className="w-9 h-9 sm:w-10 sm:h-10 object-contain"
          />

          <div>
            <h1 className="text-base sm:text-xl font-bold text-blue-600">
              Miklajung Academy
            </h1>
            <p className="text-[10px] sm:text-xs text-gray-500 -mt-1">
              Learn • Grow • Succeed
            </p>
          </div>

        </div>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-6 font-medium text-gray-700">

          <Link to="/" className="hover:text-blue-600 transition">Home</Link>
          <Link to="/about" className="hover:text-blue-600 transition">About</Link>
          <Link to="/courses" className="hover:text-blue-600 transition">Classes</Link>
          <Link to="/contact" className="hover:text-blue-600 transition">Contact</Link>

          {/* ADMIN LOGIN */}
          <Link
            to="/admin/login"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Admin Login
          </Link>

        </div>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-2xl text-gray-700"
        >
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-white border-t px-6 py-4 space-y-4 font-medium text-gray-700">

          <Link onClick={() => setOpen(false)} to="/" className="block">Home</Link>
          <Link onClick={() => setOpen(false)} to="/about" className="block">About</Link>
          <Link onClick={() => setOpen(false)} to="/courses" className="block">Classes</Link>
          <Link onClick={() => setOpen(false)} to="/contact" className="block">Contact</Link>

          {/* ADMIN LOGIN MOBILE */}
          <Link
            onClick={() => setOpen(false)}
            to="/admin/login"
            className="block bg-blue-600 text-white text-center py-2 rounded-lg"
          >
            Admin Login
          </Link>

        </div>
      )}

    </nav>
  );
}