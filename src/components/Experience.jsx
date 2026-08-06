const experiences = [
  {
    role: "Data Transformation Analyst",
    company: "National Hispanic Health Research Institute (NHHRI)",
    location: "Hartford, CT (Remote)",
    period: "Feb 2026 – Jul 2026",
    points: [
      "Collected, cleaned, and integrated healthcare datasets from U.S. Census, CDC, and federal sources across 51 states using Python, SQL, and Excel, improving data quality by ~30%.",
      "Processed and standardized 200K+ healthcare records on chronic conditions and demographic indicators, reducing manual data preparation by 35% and improving reporting accuracy.",
      "Built interactive Tableau dashboards to visualize healthcare and demographic trends across 6 years of data, enabling state-level analysis and accelerating stakeholder decision-making by 45%.",
    ],
  },
  {
    role: "Data Scientist",
    company: "Chicago Education Advocacy Cooperative (ChiEAC)",
    location: "Chicago, IL (Remote)",
    period: "Aug 2025 – Jul 2026",
    points: [
      "Analyzed customer churn behavior using Python-based KPI calculations, identifying a 19.7% churn rate and pinpointing bronze and silver tiers as highest-risk customer segments.",
      "Quantified $310K in revenue at risk by segmenting high-risk customers using service risk and customer value metrics, enabling targeted retention strategy recommendations.",
      "Developed KPI dashboards that translated customer behavior data into actionable retention insights for business stakeholders.",
    ],
  },
  {
    role: "Big Data and Cloud Developer",
    company: "Abzooba India Infotech Pvt. Ltd.",
    location: "Pune, India",
    period: "Jun 2021 – Jun 2023",
    points: [
      "Designed and maintained ETL/ELT pipelines processing 100+ GB of nested healthcare JSON data daily, transforming raw data into structured datasets using Python, SQL, and PySpark.",
      "Improved data accuracy by 25% through root-cause analysis and validation of data transformation logic, ensuring reliable data for analytics.",
      "Reduced pipeline processing time by up to 40% by optimizing Apache Spark jobs, minimizing data shuffling, and improving distributed data transformations.",
      "Translated complex stakeholder requirements into PySpark data transformation logic; collaborated with QA and API teams to validate data quality against business specifications.",
    ],
  },
];

function Experience() {
  return (
    <section
      id="experience"
      className="bg-slate-900 px-6 py-20 md:px-12 lg:px-16"
    >
      <div className="mx-auto max-w-7xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">
          Experience
        </p>

        <h2 className="mb-12 text-3xl font-bold text-white sm:text-4xl">
          My Professional Journey
        </h2>

        <div className="relative border-l border-slate-700 pl-8">
          {experiences.map((experience) => (
            <div key={experience.role} className="relative mb-12 last:mb-0">
              <span className="absolute -left-[41px] top-2 h-4 w-4 rounded-full border-4 border-slate-900 bg-blue-500" />

              <div className="rounded-2xl border border-slate-800 bg-slate-950 p-6">
                <p className="mb-2 text-sm font-medium text-blue-400">
                  {experience.period}
                </p>

                <h3 className="text-xl font-semibold text-white">
                  {experience.role}
                </h3>

                <p className="mt-1 text-slate-400">
                  {experience.company} · {experience.location}
                </p>

                <ul className="mt-5 space-y-3 text-slate-300">
                  {experience.points.map((point) => (
                    <li key={point} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;