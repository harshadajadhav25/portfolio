<template>
  <div id="app">
    <header>
      <div class="logo">Harshada Jadhav</div>
      <nav>
        <a href="#about">About</a>
        <a href="#education">Education</a>
        <a href="#experience">Experience</a>
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>

    <section class="hero" id="hero">
      <div class="hero-text">
        <img src="/profile.jpg" alt="Harshada" class="hero-img" />
        <h1>Hello, I'm Harshada</h1>
        <p>Big Data Enthusiast | Cloud Developer | Data Engineer</p>
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

    <section class="section" id="education">
      <h2>Education</h2>
      <div class="info-card">
        <p><strong>California State University, Los Angeles</strong><br />Master of Science in Computer Science (2023–2025)</p>
        <p><strong>Savitribai Phule Pune University, Pune</strong><br />Bachelor of Engineering in Computer Engineering (2017–2021)</p>
      </div>
    </section>

    <section class="section" id="experience">
      <h2>Experience</h2>
      <div class="info-card">
        <div class="exp-row">
          <span class="exp-left"><strong>Abzooba India Infotech Pvt. Ltd.</strong></span>
          <span class="exp-right">Pune, Maharashtra, India</span>
        </div>
        <div class="exp-row">
          <span class="exp-left">Big Data and Cloud Junior Developer</span>
          <span class="exp-right">June 2021 – June 2023</span>
        </div>
        <ul class="experience-list">
          <li>Worked on a comprehensive end-to-end ETL pipeline leveraging AWS services, including Glue, RDS, S3, Lambda, Athena, OpenSearch, and EC2 to process 100 GBs of data using Python and PySpark.</li>
          <li>Improved data analysis capabilities using Microsoft Suite, enabling data-driven decisions from 1–5 billion records.</li>
          <li>Optimized ETL processes by implementing advanced techniques, debugging, and backtracking within a CI/CD framework, reducing data processing time by 40% and increasing accuracy by 25%.</li>
          <li>Transformed complex nested data formats (JSON, text, CSV) into insights with PySpark, supporting Agile decision-making.</li>
          <li>Enhanced performance by 60% through PySpark and efficient querying of RDS using SQL and PostgreSQL.</li>
        </ul>
      </div>
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
      <form action="https://formspree.io/f/xyzwelpn" method="POST" class="contact-form">
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="_replyto" placeholder="Your Email" required />
        <textarea name="message" rows="5" placeholder="Your Message" required></textarea>
        <button type="submit" class="btn">Send Message</button>
      </form>
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

html, body {
  max-width: 100%;
  overflow-x: hidden;
}

body {
  margin: 0;
  font-family: 'Poppins', sans-serif;
  background: #111;
  color: #e0e0e0;
  scroll-behavior: smooth;
  font-size: 18px;
}

header {
  background: #000;
  text-align: center;
  padding: 20px 0;
}

.logo {
  font-size: 3rem;
  color: #00d8ff;
}

nav {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
}

nav a {
  color: #e0e0e0;
  text-decoration: none;
  font-weight: 500;
}

.hero {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(to right, #1f1f1f, #121212);
  text-align: center;
  padding: 60px 20px;
}

.hero-img {
  width: 280px;
  height: 370px;
  object-fit: cover;
  margin-bottom: 40px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.2);
  border-radius: 10px;
}

.hero h1 {
  font-size: 3.5rem;
  margin: 0 0 10px;
  color: white;
}

.hero p {
  font-size: 1.5rem;
  margin-bottom: 30px;
  color: white;
}

.btn {
  background: #00d8ff;
  color: black;
  padding: 14px 30px;
  border-radius: 30px;
  font-weight: bold;
  text-decoration: none;
  transition: background 0.3s;
}

.btn:hover {
  background: #00aacc;
}

.section {
  padding: 100px 5%;
  background: #f4f4f4;
  text-align: center;
  color: #111;
}

.section h2 {
  font-size: 3rem;
  margin-bottom: 40px;
}

.section p {
  font-size: 1.5rem;
  max-width: 1000px;
  margin: auto;
  line-height: 1.8;
}

.info-card {
  background: #1e1e1e;
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0px 5px 20px rgba(0,0,0,0.7);
  transition: transform 0.3s;
  font-size: 1.2rem;
  max-width: 1000px;
  margin: 0 auto 30px;
  color: #ddd;
}

.info-card:hover {
  transform: translateY(-8px);
}

.experience-list {
  margin-top: 20px;
  padding-left: 20px;
  font-size: 1.1rem;
  line-height: 1.7;
  text-align: left;
}

.experience-list li {
  margin-bottom: 12px;
}

.exp-row {
  display: flex;
  justify-content: space-between;
  font-size: 1.3rem;
  margin-bottom: 8px;
  flex-wrap: wrap;
}

.exp-left {
  font-weight: 500;
}

.exp-right {
  color: #ccc;
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

.card h3 {
  color: #ffffff;
  font-weight: bold;
  margin-bottom: 15px;
}

.card p {
  color: #cccccc;
  font-size: 1.3rem;
  line-height: 1.8;
}

.skill i {
  font-size: 3rem;
  margin-bottom: 15px;
  color: #00d8ff;
}

.skill p {
  color: #dddddd;
  font-size: 1.3rem;
  margin-top: 10px;
  text-align: center;
}

.contact-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  max-width: 600px;
  margin: auto;
}

.contact-form input,
.contact-form textarea {
  width: 100%;
  padding: 12px;
  font-size: 1rem;
  border-radius: 8px;
  border: 1px solid #ccc;
  font-family: inherit;
}

.contact-form button {
  margin-top: 10px;
}

footer {
  background: #000;
  color: white;
  text-align: center;
  padding: 30px;
  font-size: 1rem;
}
</style>
