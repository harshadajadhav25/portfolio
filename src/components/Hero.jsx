import profile from "../assets/profile.jpg";

function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-slate-950 px-6 py-20 md:px-12 lg:px-16"
    >
      {/* Background Glow */}
      <div className="absolute -top-32 -left-24 h-80 w-80 rounded-full bg-blue-600/20 blur-3xl" />

      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-purple-600/10 blur-3xl" />

      <div className="relative mx-auto grid min-h-[85vh] max-w-7xl items-center gap-16 lg:grid-cols-2">
        {/* Left Section */}
        <div>
          <p className="mb-5 inline-block rounded-full border border-blue-500/30 bg-blue-500/10 px-5 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">
            Data Engineer
          </p>

          <h1 className="text-5xl font-extrabold leading-tight text-white md:text-7xl">
            Harshada
            <br />
            <span className="text-blue-400">Jadhav</span>
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-8 text-slate-300">
            I build reliable data pipelines and analytics-ready datasets
            using Python, SQL, PySpark, and AWS.
          </p>

          <p className="mt-4 max-w-xl text-base leading-7 text-slate-400">
            3+ years of experience in ETL development, Spark performance
            tuning, data modeling, and automated data quality validation.
          </p>

          <div className="mt-10 flex flex-wrap gap-5">
            <a
              href="#projects"
              className="rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white transition duration-300 hover:scale-105 hover:bg-blue-500"
            >
              View Projects
            </a>

            <a
              href="/Harshada_Jadhav_Resume.pdf"
              download
              className="rounded-xl border border-slate-700 px-8 py-4 font-semibold text-white transition duration-300 hover:border-blue-500 hover:bg-slate-900"
            >
              Download Resume
            </a>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex justify-center">
          <div className="relative">
            {/* Glow */}
            <div className="absolute inset-0 scale-110 rounded-full bg-blue-500/30 blur-3xl" />

            <img
              src={profile}
              alt="Harshada Jadhav"
              className="relative h-64 w-64 rounded-full border-4 border-slate-800 object-cover shadow-2xl sm:h-80 sm:w-80 lg:h-96 lg:w-96"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;