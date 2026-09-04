import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import Cell from '../components/Projects/Cell';
import data from '../data/projects';

const awarded = data.filter((p) => p.award).length;

const Projects = () => (
  <Main
    title="Projects"
    description="Selected projects by Ahammad Shawki: agentic AI systems, machine learning and full-stack products."
  >
    <article className="post" id="projects">
      <header>
        <div className="title">
          <h2><Link to="/projects">Projects</Link></h2>
          <p>
            {data.length} selected projects, newest first. {awarded} of them won their competition.
            Most were built to a deadline, and every one of them shipped.
          </p>
        </div>
      </header>
      <div className="project-grid">
        {data.map((project) => (
          <Cell data={project} key={project.title} />
        ))}
      </div>
    </article>
  </Main>
);

export default Projects;
