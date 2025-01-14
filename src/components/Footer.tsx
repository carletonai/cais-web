import React from "react";



export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-8">
      <div className="text-center mt-8 border-t border-gray-700 pt-4">
        <p className="text-gray-500">
          © {new Date().getFullYear()} Carleton Artificial Intelligence Society
        </p>
      </div>
    </footer>
  );
}
