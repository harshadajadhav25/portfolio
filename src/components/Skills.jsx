import {
  FaAws,
  FaChartBar,
  FaDatabase,
  FaGitAlt,
  FaPython,
} from "react-icons/fa";

import {
  SiApachespark,
  SiJupyter,
  SiMysql,
  SiPandas,
  SiPostgresql,
} from "react-icons/si";

const skillGroups = [
  {
    title: "Programming & Analytics",
    icon: FaPython,
    skills: ["Python", "SQL", "Pandas", "NumPy", "EDA", "KPI Analysis"],
  },
  {
    title: "Data Engineering",
    icon: SiApachespark,
    skills: [
      "PySpark",
      "Apache Spark",
      "ETL/ELT",
      "Batch Processing",
      "Data Transformation",
      "Data Validation",
    ],
  },
  {
    title: "Visualization",
    icon: FaChartBar,
    skills: ["Power BI", "Tableau", "Excel", "Dashboard Development"],
  },
  {
    title: "Cloud",
    icon: FaAws,
    skills: ["AWS S3", "AWS Glue", "AWS RDS", "Google BigQuery"],
  },
  {
    title: "Databases",
    icon: FaDatabase,
    skills: ["PostgreSQL", "MySQL", "SQL", "Data Modeling"],
  },
  {
    title: "AI & Tools",
    icon: FaGitAlt,
    skills: [
      "Generative AI",
      "Groq API",
      "Prompt Engineering",
      "Git",
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
  { name: "Spark", icon: SiApachespark },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "MySQL", icon: SiMysql },
  { name: "Jupyter", icon: SiJupyter },
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
          Technologies and tools I use to analyze data, build reliable
          pipelines, create dashboards, and support data-driven decisions.
        </p>

        <div className="mb-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-3">
          {featuredTools.map((tool) => {
            const Icon = tool.icon;

            return (
              <div
                key={tool.name}
                className="flex flex-col items-center justify-center rounded-2xl border border-slate-800 bg-slate-900 p-5 transition duration-300 hover:-translate-y-1 hover:border-blue-500"
              >
                <Icon className="text-4xl text-blue-400" />

                <p className="mt-3 text-sm font-medium text-slate-300">
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
                  <Icon className="text-2xl text-blue-400" />

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