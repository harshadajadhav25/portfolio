import {
  FaAws,
  FaChartBar,
  FaDatabase,
  FaDocker,
  FaGitAlt,
  FaPython,
} from "react-icons/fa";

import {
  SiApachespark,
  SiMysql,
  SiPandas,
  SiPostgresql,
} from "react-icons/si";

const skillGroups = [
  {
    title: "Programming & Analytics",
    icon: FaPython,
    skills: [
      "Python",
      "SQL",
      "Bash",
      "Pandas",
      "NumPy",
      "EDA",
      "KPI Analysis",
    ],
  },
  {
    title: "Data Engineering",
    icon: SiApachespark,
    skills: [
      "Apache Spark",
      "PySpark",
      "Delta Lake",
      "dbt",
      "ETL/ELT",
      "Batch Processing",
      "Medallion Architecture",
      "Data Quality Validation",
    ],
  },
  {
    title: "Cloud & Data Platforms",
    icon: FaAws,
    skills: [
      "Amazon S3",
      "AWS Glue",
      "Amazon Athena",
      "Amazon Redshift",
      "Amazon RDS",
      "AWS Lambda",
      "Databricks",
      "Google BigQuery",
    ],
  },
  {
    title: "Databases & Modeling",
    icon: FaDatabase,
    skills: [
      "PostgreSQL",
      "MySQL",
      "Data Warehousing",
      "Data Modeling",
      "Dimensional Modeling",
      "Star Schema",
      "Schema Design",
    ],
  },
  {
    title: "Visualization & AI",
    icon: FaChartBar,
    skills: [
      "Power BI",
      "Tableau",
      "Excel",
      "Dashboard Development",
      "Streamlit",
      "Plotly",
      "LLM Integration",
      "Groq API",
    ],
  },
  {
    title: "Development & DevOps",
    icon: FaGitAlt,
    skills: [
      "Git",
      "Docker",
      "GitHub Actions",
      "CI/CD",
      "Unit Testing",
      "Jupyter Notebook",
    ],
  },
];

const featuredTools = [
  { name: "Python", icon: FaPython },
  { name: "Pandas", icon: SiPandas },
  { name: "Power BI", icon: FaChartBar },
  { name: "Tableau", icon: FaChartBar },
  { name: "AWS", icon: FaAws },
  { name: "Apache Spark", icon: SiApachespark },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "MySQL", icon: SiMysql },
  { name: "Docker", icon: FaDocker },
];

function Skills() {
  return (
    <section
      id="skills"
      className="bg-slate-950 px-6 py-20 md:px-12 lg:px-16"
    >
      <div className="mx-auto max-w-7xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">
          Skills
        </p>

        <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
          Technical Expertise
        </h2>

        <p className="mb-12 max-w-2xl leading-7 text-slate-400">
          Technologies I use to build reliable data pipelines, model
          analytics-ready datasets, automate validation, and create
          reporting applications.
        </p>

        <div className="mb-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-3">
          {featuredTools.map((tool) => {
            const Icon = tool.icon;

            return (
              <div
                key={tool.name}
                className="flex flex-col items-center justify-center rounded-2xl border border-slate-800 bg-slate-900 p-5 transition duration-300 hover:-translate-y-1 hover:border-blue-500"
              >
                <Icon
                  aria-hidden="true"
                  className="text-4xl text-blue-400"
                />

                <p className="mt-3 text-center text-sm font-medium text-slate-300">
                  {tool.name}
                </p>
              </div>
            );
          })}
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => {
            const Icon = group.icon;

            return (
              <article
                key={group.title}
                className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition duration-300 hover:border-blue-500"
              >
                <div className="flex items-center gap-3">
                  <Icon
                    aria-hidden="true"
                    className="shrink-0 text-2xl text-blue-400"
                  />

                  <h3 className="text-xl font-semibold text-white">
                    {group.title}
                  </h3>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-slate-700 px-3 py-2 text-sm text-slate-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Skills;