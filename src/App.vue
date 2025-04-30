<template>
  <div id="app">
    <header>
      <div class="logo">Harshada Jadhav</div>
      <nav>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>

    <section class="hero" id="hero">
      <div class="hero-text">
        <h1>Hello, I'm Harshada</h1>
        <p>Data Engineer | Cloud Developer | Data Enthusiast</p>
        <a href="#projects" class="btn">View Projects</a>
      </div>
    </section>

    <section class="section" id="about">
      <h2>About Me</h2>
      <p>
        I'm a Computer Science graduate from California State University, Los Angeles,
        specializing in Big Data, AWS cloud solutions, and analytics.
        With experience at Abzooba India Infotech, I developed ETL pipelines, optimized data processing
        for billions of records, and delivered actionable insights for real-world business challenges.
      </p>
    </section>

    <section class="section" id="projects">
      <h2>Projects</h2>
      <div class="projects-grid">
        <div class="card" v-for="(project, index) in projects" :key="index">
          <h3>{{ project.title }}</h3>
          <p>{{ project.description }}</p>
        </div>
      </div>
    </section>

    <section class="section" id="skills">
      <h2>Skills</h2>
      <div class="skills-grid">
        <div class="skill" v-for="(skill, index) in skills" :key="index">
          <i :class="skill.icon"></i>
          <p>{{ skill.name }}</p>
        </div>
      </div>
    </section>

    <section class="section" id="contact">
      <h2>Contact</h2>
      <p>Email: <a href="mailto:jadhavharshadas.2599@gmail.com">jadhavharshadas.2599@gmail.com</a></p>
      <p>LinkedIn: <a href="https://www.linkedin.com/in/harshada-jadhav/" target="_blank">Visit Profile</a></p>
    </section>

    <footer>
      &copy; 2025 Harshada Jadhav | Designed with Vue.js
    </footer>
  </div>
</template>

<script setup>
const projects = [
  { title: "Crime Data Analysis", description: "Processed 1M+ crime records, created Tableau dashboards to reveal geospatial crime patterns in Los Angeles." },
  { title: "NLP to SQL", description: "Developed an LSTM-based model to transform natural language queries into SQL commands, improving non-technical access to data." },
  { title: "Customer Segmentation", description: "Performed customer clustering using K-Means and retail market basket analysis to boost online sales by 50%." },
  { title: "Suicide Rate Dashboard", description: "Built a Dash application visualizing Indian suicide statistics across a decade using interactive graphs." },
];

const skills = [
  { name: "Python", icon: "fab fa-python" },
  { name: "Apache Spark / PySpark", icon: "fas fa-fire" },
  { name: "SQL / MySQL / PostgreSQL", icon: "fas fa-database" },
  { name: "AWS (Glue, S3, Lambda, RDS)", icon: "fab fa-aws" },
  { name: "Data Visualization (Tableau, PowerBI)", icon: "fas fa-chart-bar" },
  { name: "Dash Framework", icon: "fas fa-code" },
  { name: "HTML / CSS / JavaScript", icon: "fab fa-html5" },
  { name: "Microsoft Azure", icon: "fab fa-microsoft" },
  { name: "GitHub / CI-CD Pipelines", icon: "fab fa-github" },
  { name: "Linux / Windows / macOS", icon: "fas fa-laptop-code" },
];
</script>

<style scoped>
@import "@fortawesome/fontawesome-free/css/all.min.css";

body {
  margin: 0;
  font-family: 'Poppins', sans-serif;
  background: #111;
  color: #e0e0e0;
  scroll-behavior: smooth;
  font-size: 18px;
  overflow-x: hidden;
}

header {
  top: 0;
  width: 100%;
  background: #000;
  display: flex;
  flex-direction: column;
  align-items: left;
  padding: 20px 0;
  box-shadow: 0px 2px 10px rgba(255,255,255,0.1);
  z-index: 999;
}

.logo {
  font-size: 3rem;
  font-weight: bold;
  color: #00d8ff;
  margin-bottom: 10px;
}

nav {
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
}
nav a {
  color: #e0e0e0;
  text-decoration: none;
  font-weight: 500;
  font-size: 1.1rem;
}

.hero {
  width: 100%;
  height: 100vh;
  overflow-x: hidden;
  background: linear-gradient(to right, #1f1f1f, #121212);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0 20px;
  box-sizing: border-box;
}

.hero-text h1 {
  font-size: 3.5rem;
  margin-bottom: 20px;
}

.hero-text p {
  font-size: 1.5rem;
  margin-bottom: 30px;
}

.btn {
  background: #00d8ff;
  color: black;
  padding: 14px 30px;
  border-radius: 30px;
  text-decoration: none;
  font-weight: bold;
  font-size: 1rem;
  transition: background 0.3s;
}
.btn:hover {
  background: #00aacc;
}

.section {
  width: 100%;
  text-align: center;
}

#about,
#skills,
#contact {
  background-color: #f4f4f4;
  color: #111;
}

.section h2 {
  font-size: 2.5rem;
  margin-bottom: 40px;
  color: black;
}

.section p {
  font-size: 1.3rem;
  line-height: 1.8;
  color: #333;
  max-width: 1000px;
  margin: auto;
}

/* Projects section */
.card h3 {
  color: #ffffff;
  font-weight: bold;
  margin-bottom: 15px;
}

.card p {
  color: #cccccc;
  font-size: 1rem;
  line-height: 1.6;
}

/* Skills section */
.skill p {
  color: #dddddd;
  font-size: 1.1rem;
  margin-top: 10px;
  text-align: center;
}

.projects-grid, .skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
  margin-top: 40px;
}

.card, .skill {
  background: #1e1e1e;
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0px 5px 20px rgba(0,0,0,0.7);
  transition: transform 0.3s;
  font-size: 1.1rem;
}
.card:hover, .skill:hover {
  transform: translateY(-8px);
}

.skill i {
  font-size: 3rem;
  margin-bottom: 15px;
  color: #00d8ff;
}

#contact a {
  color: #0066cc;
  font-weight: 500;
}
#contact a:hover {
  text-decoration: underline;
}

footer {
  background: #000;
  color: white;
  text-align: center;
  padding: 30px;
  font-size: 1rem;
}
</style>
