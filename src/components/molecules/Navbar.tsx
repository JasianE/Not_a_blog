
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
    <header className="fixed top-6 left-0 right-0 z-50 flex justify-center pointer-events-none">
      {/* Centered nav container */}
      <div className="pointer-events-auto bg-white/80 backdrop-blur-md shadow-sm border border-gray-200 w-[32rem] max-w-[90%] h-14 rounded-xl flex items-center justify-center">
        
        {/* Nav items */}
        <nav className="flex items-center gap-6 text-[0.95rem]">
          {links.map((link, index) => (
            <React.Fragment key={link.to}>
              <Link
                to={link.to}
                className={
                  pathname === link.to
                    ? "font-semibold text-black"
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
      </div>
    </header>
  );
}

export default Navbar;
