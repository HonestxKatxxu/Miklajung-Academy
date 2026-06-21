import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-10">

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 grid gap-8 md:grid-cols-3">

        {/* BRAND */}
        <div>
          <h2 className="text-xl font-bold text-blue-400">
            Miklajung Academy
          </h2>

          <p className="text-gray-300 mt-3 text-sm">
            Quality education from Nursery to Class 8 with modern learning and practical teaching methods.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>

          <ul className="space-y-2 text-gray-300">
            <li><Link to="/" className="hover:text-white">Home</Link></li>
            <li><Link to="/about" className="hover:text-white">About</Link></li>
            <li><Link to="/courses" className="hover:text-white">Classes</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact</h3>

          <p className="text-gray-300 text-sm">📍 Nepal</p>
          <p className="text-gray-300 text-sm mt-1">📞 +977-XXXXXXXXX</p>
          <p className="text-gray-300 text-sm mt-1">📧 info@miklajungacademy.com</p>
        </div>

      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-gray-700 text-center py-4 text-sm text-gray-400">
        © {new Date().getFullYear()} Miklajung Academy. All rights reserved.
      </div>

    </footer>
  );
}