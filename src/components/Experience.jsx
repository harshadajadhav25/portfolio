const experiences = [
  {
    role: "Data Engineer",
    company: "National Hispanic Health Research Institute (NHHRI)",
    location: "Hartford, CT (Remote)",
    period: "Feb 2026 – Jul 2026",
    points: [
      "Integrated CDC, U.S. Census, and federal public health datasets into Amazon Redshift, improving data quality by 30% through automated schema validation, deduplication, and standardized date and location formats.",
      "Automated cleaning and standardization of 200,000+ public health records using Python and SQL, reducing manual data preparation time by 35% through consistent column types, missing-value handling, and unified join keys.",
      "Designed pre-aggregated star-schema fact and dimension tables spanning 6 years of public health data in Amazon Redshift, powering Power BI dashboards and reducing executive reporting turnaround time by 45%.",
    ],
  },
  {
    role: "Data Engineer",
    company: "Chicago Education Advocacy Cooperative (ChiEAC)",
    location: "Chicago, IL (Remote)",
    period: "Aug 2025 – Jan 2026",
    points: [
      "Engineered Bronze–Silver–Gold medallion architecture using PySpark, SQL, and Delta Lake to transform 9,000 customer records into validated, analytics-ready datasets through automated ETL pipelines and data quality checks.",
      "Built Gold-layer analytical data marts for churn segmentation, customer value, and retention analysis across 4 membership tiers, calculating a 19.73% churn rate and customer retention KPIs.",
      "Containerized data processing workflows using Docker and implemented GitHub Actions CI/CD to automate pipeline testing and validation.",
    ],
  },
  {
    role: "Data Developer",
    company: "California State University, Los Angeles",
    location: "Los Angeles, CA",
    period: "Aug 2025 – Jan 2026",
    points: [
      "Assisted with cleaning, validating, and organizing departmental data using SQL, Python, and Excel for reporting needs.",
      "Supported simple ETL workflows by extracting data from multiple files/sources, applying transformations, and preparing structured datasets for departmental reporting."
    ],
  },
  {
    role: "Big Data Developer",
    company: "Abzooba India Infotech Pvt. Ltd.",
    location: "Pune, India",
    period: "Jun 2021 – Jun 2023",
    points: [
      "Designed and scaled production ETL pipelines using AWS Glue, PySpark, Amazon S3, Athena, and SQL to transform 100+ GB of daily semi-structured JSON healthcare data into analytical tables.",
      "Reduced pipeline execution time by 40% through Spark job optimization, SQL query tuning, and distributed processing improvements.",
      "Increased data accuracy by 25% through automated validation, root-cause analysis, and transformation logic fixes, collaborating with engineering and business teams to define data requirements."
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