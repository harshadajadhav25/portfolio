import { FiExternalLink, FiGithub } from "react-icons/fi";

const projects = [
  {
  title: "InsightAI – AI-Powered Data Analyst Agent",
  technologies: [
    "Python",
    "Groq API",
    "Pandas",
    "Streamlit",
    "Plotly",
  ],
  description:
    "Built a conversational analytics application using Streamlit and the Groq API, enabling natural-language SQL and Pandas querying over uploaded datasets.",
  highlights: [
    "Automated exploratory data analysis with data sanitization, Plotly chart selection, and code validation for LLM-generated analysis.",
  ],
  github:
    "https://github.com/harshadajadhav25/ai-data-analyst-agent",
  demo: "https://ai-data-analyst-agent-csv.streamlit.app/",
},

{
  title: "Fraud Risk Analysis",
  technologies: [
    "Python",
    "SQL",
    "Batch Data Processing",
    "Data Validation",
    "Feature Engineering",
  ],
  description:
    "Developed a batch data pipeline to process 280,000+ financial transaction records, applying feature normalization and aggregation to prepare inputs for fraud risk models.",
  highlights: [
    "Implemented data validation rules for a transaction dataset with a fraud rate below 0.2%, preparing consistent datasets for downstream analysis.",
  ],
  github:
    "https://github.com/harshadajadhav25/Fraud-Risk-Analysis",
  },

  {
    title: "Crime Data Analysis & Visualization",
    technologies: [
      "Python",
      "Pandas",
      "NumPy",
      "SQL",
      "Tableau",
      "EDA",
    ],
    description:
      "Cleaned, standardized, and analyzed 1M+ LAPD crime records using Python and SQL, improving data quality by 25% through data preprocessing and schema normalization.",
    highlights: [
      "Built interactive Tableau dashboards with geospatial and time-series visualizations to identify crime hotspots and seasonal trends, enabling data-driven public safety analysis.",
    ],
    github:
      "https://github.com/harshadajadhav25/crime-data-analysis",
  },

  {
    title: "Customer Churn Prediction & Analytics",
    technologies: [
      "Python",
      "Pandas",
      "Scikit-learn",
      "Machine Learning",
      "Streamlit",
    ],
    description:
      "Developed an end-to-end churn analytics solution that identifies high-risk customers, monitors KPIs, estimates revenue risk, and provides retention recommendations.",
    highlights: [
      "Built an interactive dashboard to analyze churn trends, customer segments, and revenue risk while providing actionable business insights for retention strategies.",
    ],
    github:
      "https://github.com/harshadajadhav25/customer-churn-project",
    demo:
      "https://customer-churn-ml-dashboard.streamlit.app/",
  },
];

function Projects() {
  return (
    <section
      id="projects"
      className="bg-slate-900 px-6 py-20 md:px-12 lg:px-16"
    >
      <div className="mx-auto max-w-7xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">
          Projects
        </p>

        <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
          Featured Projects
        </h2>

        <p className="mb-12 max-w-2xl leading-7 text-slate-400">
          A selection of data analytics, machine learning, visualization, and
          AI-powered projects focused on solving real-world business problems.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group flex flex-col rounded-2xl border border-slate-800 bg-slate-950 p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-500/70 hover:shadow-xl hover:shadow-blue-950/20 md:p-8"
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-xl font-semibold leading-8 text-white">
                  {project.title}
                </h3>

                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-blue-500" />
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full border border-slate-700 bg-slate-900 px-3 py-1 text-xs font-medium text-slate-300"
                  >
                    {technology}
                  </span>
                ))}
              </div>

              <p className="mt-6 text-slate-400">
                {project.description}
              </p>

              <ul className="mt-4 space-y-2 text-slate-300">
                {project.highlights.map((point) => (
                  <li key={point} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-400" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex gap-4 border-t border-slate-800 pt-5">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-semibold text-slate-300 transition hover:text-blue-400"
                >
                  <FiGithub />
                  GitHub
                </a>

                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-semibold text-slate-300 transition hover:text-blue-400"
                  >
                    <FiExternalLink />
                    Live Demo
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;