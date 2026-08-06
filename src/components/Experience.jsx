const experiences = [
  {
    role: "Data Analyst",
    company: "National Hispanic Health Research Institute (NHHRI)",
    location: "Remote",
    period: "Feb 2026 – Jul 2026",
    points: [
      "Collected, cleaned, and integrated healthcare and public health datasets using Python, SQL, and Excel.",
      "Processed and standardized 35K+ records across 51 states.",
      "Analyzed healthcare and demographic trends across multiple years.",
      "Designed Tableau dashboards to support stakeholder analysis and decision-making.",
    ],
  },
  {
    role: "Data Scientist",
    company: "Chicago Education Advocacy Cooperative (ChiEAC)",
    location: "Remote",
    period: "Aug 2025 – Jul 2026",
    points: [
      "Analyzed customer behavior data using Python and KPI analysis.",
      "Identified churn trends, high-risk customer segments, and revenue exposure.",
      "Created dashboards and translated findings into business recommendations.",
    ],
  },
  {
    role: "Big Data & Cloud Developer",
    company: "Abzooba India Infotech Pvt. Ltd.",
    location: "Pune, India",
    period: "Jun 2021 – Jun 2023",
    points: [
      "Built ETL pipelines using AWS Glue, PySpark, and SQL.",
      "Processed more than 100 GB of healthcare data daily.",
      "Improved Spark processing performance by up to 40%.",
      "Implemented validation checks that improved data accuracy.",
    ],
  },
];

function Experience() {
  return (
    <section
      id="experience"
      className="bg-slate-950 px-6 py-20 md:px-12 lg:px-16"
    >
      <div className="mx-auto max-w-7xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">
          Experience
        </p>

        <h2 className="mb-12 text-3xl font-bold text-white sm:text-4xl">
          Professional experience
        </h2>

        <div className="relative border-l border-slate-800 pl-8">
          {experiences.map((experience) => (
            <article
              key={`${experience.role}-${experience.company}`}
              className="relative mb-10 last:mb-0"
            >
              <span className="absolute -left-[41px] top-7 h-4 w-4 rounded-full border-4 border-slate-950 bg-blue-500" />

              <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition duration-300 hover:border-blue-500/70 hover:shadow-lg hover:shadow-blue-950/20 md:p-8">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-white sm:text-2xl">
                      {experience.role}
                    </h3>

                    <p className="mt-2 text-slate-300">
                      {experience.company}
                    </p>

                    <p className="mt-1 text-sm text-slate-500">
                      {experience.location}
                    </p>
                  </div>

                  <p className="w-fit rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-400">
                    {experience.period}
                  </p>
                </div>

                <ul className="mt-6 space-y-3 text-slate-300">
                  {experience.points.map((point) => (
                    <li key={point} className="flex gap-3 leading-7">
                      <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;