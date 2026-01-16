
import React from "react";
import { Link, useLocation } from "react-router";

function Navbar() {
  const { pathname } = useLocation();

  const links = [
    { to: "/", label: "Home" },
    { to: "/projects", label: "Projects" },
    { to: "/blog", label: "Blog" },
    { to: "/now", label: "Now" },
  ];

  return (
    <header className="fixed top-10 right-50 left-50 z-50 bg-white/80 backdrop-blur-sm flex justify-center text-blue-600">
      <nav className="max-w-3xl flex items-center gap-6 px-6 py-4 border border-gray-200 rounded-full shadow-sm">
        
        {links.map((link, index) => (
          <React.Fragment key={link.to}>
            <Link
              to={link.to}
              className={
                pathname === link.to
                  ? "text-black font-semibold"
                  : "text-gray-600 hover:text-black"
              }
            >
              {link.label}
            </Link>

            {index < links.length - 1 && (
              <span className="text-gray-300">|</span>
            )}
          </React.Fragment>
        ))}

      </nav>
    </header>
  );
}

export default Navbar;
