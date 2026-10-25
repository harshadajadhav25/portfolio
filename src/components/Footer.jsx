import { FiArrowUp, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 px-6 py-8 md:px-12 lg:px-16">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
        <div>
          <p className="font-semibold text-white">Harshada Jadhav</p>

          <p className="mt-1 text-sm text-slate-500">
            Data Engineer · © 2026 All rights reserved.
          </p>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="mailto:jadhavharshadas.2599@gmail.com"
            aria-label="Email Harshada Jadhav"
            className="rounded-lg border border-slate-800 p-2.5 text-slate-400 transition hover:border-blue-500 hover:text-blue-400"
          >
            <FiMail />
          </a>

          <a
            href="https://www.linkedin.com/in/harshada-jadhav/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="rounded-lg border border-slate-800 p-2.5 text-slate-400 transition hover:border-blue-500 hover:text-blue-400"
          >
            <FiLinkedin />
          </a>

          <a
            href="https://github.com/harshadajadhav25"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="rounded-lg border border-slate-800 p-2.5 text-slate-400 transition hover:border-blue-500 hover:text-blue-400"
          >
            <FiGithub />
          </a>

          <a
            href="#home"
            aria-label="Return to top"
            className="ml-2 inline-flex items-center gap-2 rounded-lg border border-slate-700 px-4 py-2 text-sm font-medium text-slate-300 transition hover:border-blue-500 hover:text-blue-400"
          >
            Back to top
            <FiArrowUp />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;