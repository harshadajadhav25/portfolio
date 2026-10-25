const highlights = [
  {
    value: "3+",
    label: "Years of Experience",
  },
  {
    value: "100+ GB",
    label: "Daily Data Processed",
  },
  {
    value: "MS",
    label: "Computer Science",
  },
];

function About() {
  return (
    <section
      id="about"
      className="bg-slate-900 px-6 py-20 md:px-12 lg:px-16"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">
              About Me
            </p>

            <h2 className="max-w-3xl text-3xl font-bold leading-tight text-white sm:text-4xl">
              Building reliable pipelines and trusted datasets
            </h2>

            <div className="mt-8 max-w-3xl space-y-5 text-base leading-8 text-slate-300 sm:text-lg">
              <p>
                I’m a Data Engineer with over three years of experience
                building ETL pipelines, improving data quality, and preparing
                datasets for reporting and analytics using Python, SQL,
                PySpark, and AWS.
              </p>

              <p>
                At Abzooba, I developed production pipelines processing
                100+ GB of daily healthcare data and reduced execution time
                by 40% through Spark optimization and SQL query tuning.
                My recent work includes integrating CDC and Census datasets
                into Amazon Redshift, designing dimensional models for
                Power BI, and building Bronze–Silver–Gold pipelines using
                PySpark and Delta Lake.
              </p>

              <p>
                I hold a Master of Science in Computer Science from
                California State University, Los Angeles. I also work
                with Docker and GitHub Actions to automate pipeline
                testing and validation, with a focus on making data
                reliable and useful for the teams that depend on it.
              </p>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {highlights.map((highlight) => (
              <div
                key={highlight.label}
                className="rounded-2xl border border-slate-800 bg-slate-950 p-6 transition duration-300 hover:border-blue-500"
              >
                <p className="text-3xl font-bold text-blue-400">
                  {highlight.value}
                </p>

                <p className="mt-2 text-sm font-medium text-slate-300">
                  {highlight.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;