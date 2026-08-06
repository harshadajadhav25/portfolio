import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

function Contact() {
  return (
    <section
      id="contact"
      className="bg-slate-900 px-6 py-20 md:px-12 lg:px-16"
    >
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-950 p-8 md:p-12">
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-blue-600/10 blur-3xl" />

          <div className="relative">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">
              Contact
            </p>

            <h2 className="max-w-2xl text-3xl font-bold leading-tight text-white sm:text-4xl">
              Let’s connect and create something meaningful with data
            </h2>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-400">
              I am open to Data Analyst opportunities, professional
              collaborations, and conversations about data-driven projects.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <a
                href="mailto:jadhavharshadas.2599@gmail.com"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition duration-300 hover:bg-blue-500"
              >
                <FiMail />
                Email Me
              </a>

              <a
                href="https://www.linkedin.com/in/harshada-jadhav/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-700 px-6 py-3 font-semibold text-white transition duration-300 hover:border-blue-500 hover:bg-slate-900"
              >
                <FiLinkedin />
                LinkedIn
              </a>

              <a
                href="https://github.com/harshadajadhav25"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-700 px-6 py-3 font-semibold text-white transition duration-300 hover:border-blue-500 hover:bg-slate-900"
              >
                <FiGithub />
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;