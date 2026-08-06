import { FiExternalLink, FiGithub } from "react-icons/fi";

const projects = [
  {
    title: "InsightAI — AI-Powered Data Analyst Agent",
    technologies: [
      "Python",
      "Generative AI",
      "Groq API",
      "Pandas",
      "Streamlit",
      "Plotly",
    ],
    description:
      "Built an AI-powered analytics application that allows users to upload CSV datasets, ask questions in natural language, clean data, generate insights, and create visualizations.",
    github:
      "https://github.com/harshadajadhav25/ai-data-analyst-agent",
    demo: "https://ai-data-analyst-agent-csv.streamlit.app/",
  },
  {
    title: "Fraud Risk Analysis",
    technologies: ["Python", "SQL", "Power BI", "DAX", "Data Analysis"],
    description:
      "Analyzed more than 280,000 financial transactions to identify fraud patterns and high-risk segments, then created an interactive Power BI dashboard for monitoring and analysis.",
    github: "https://github.com/harshadajadhav25/Fraud-Risk-Analysis",
  },
  {
    title: "Crime Data Analysis & Visualization",
    technologies: ["Python", "SQL", "Tableau", "Geospatial Analysis"],
    description:
      "Cleaned and analyzed more than one million LAPD crime records and developed Tableau dashboards to identify crime hotspots, seasonal patterns, and time-based trends.",
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
    github:
      "https://github.com/harshadajadhav25/customer-churn-project",
    demo: "https://customer-churn-ml-dashboard.streamlit.app/",
  },
];

function Projects() {
  return (
    <section
      id="projects"
      className="bg-slate-900 px-6 py-20 md:px-12 lg:px-16"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
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

        {/* Project Cards */}
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

                <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-blue-500 transition group-hover:shadow-[0_0_15px_rgba(59,130,246,0.8)]" />
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

              <p className="mt-6 flex-1 leading-7 text-slate-400">
                {project.description}
              </p>

              <div className="mt-8 flex flex-wrap gap-4 border-t border-slate-800 pt-5">
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