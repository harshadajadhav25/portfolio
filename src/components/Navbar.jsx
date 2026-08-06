import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 px-6 py-4 backdrop-blur-xl md:px-12 lg:px-16">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <a
          href="#home"
          className="text-xl font-bold tracking-tight text-white sm:text-2xl"
        >
          Harshada
          <span className="text-blue-400">.</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-slate-300 transition duration-300 hover:text-blue-400"
            >
              {link.label}
            </a>
          ))}
        </div>

        <button
          type="button"
          aria-label="Toggle navigation menu"
          onClick={() => setIsOpen((current) => !current)}
          className="rounded-lg border border-slate-700 p-2 text-white transition hover:border-blue-500 hover:text-blue-400 md:hidden"
        >
          {isOpen ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>
      </div>

      {isOpen && (
        <div className="mx-auto mt-4 flex max-w-7xl flex-col gap-3 border-t border-slate-800 pt-4 md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="rounded-lg px-3 py-2 text-slate-300 transition hover:bg-slate-900 hover:text-blue-400"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;