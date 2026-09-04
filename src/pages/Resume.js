import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import Summary from '../components/Resume/Summary';
import Education from '../components/Resume/Education';
import Experience from '../components/Resume/Experience';
import Skills from '../components/Resume/Skills';
import Courses from '../components/Resume/Courses';
import Awards from '../components/Resume/Awards';

import courses from '../data/resume/courses';
import degrees from '../data/resume/degrees';
import work from '../data/resume/work';
import awards from '../data/resume/awards';
import summary from '../data/resume/summary';
import { skills, categories } from '../data/resume/skills';

const { PUBLIC_URL } = process.env;
const PDF = `${PUBLIC_URL}/Ahammad_Shawki_Resume.pdf`;

// NOTE: sections are displayed in the order defined here. Experience and
// awards come before education, because they are what a recruiter is looking
// for and the page should not make them scroll for it.
const sections = {
  Summary: () => <Summary data={summary} />,
  Experience: () => <Experience data={work} />,
  Awards: () => <Awards data={awards} />,
  Skills: () => <Skills skills={skills} categories={categories} />,
  Education: () => <Education data={degrees} />,
  Courses: () => <Courses data={courses} />,
};

const Resume = () => (
  <Main
    title="Resume"
    description="Resume of Ahammad Shawki: experience, awards, skills, education and coursework. Download as PDF."
  >
    <article className="post" id="resume">
      <header>
        <div className="title">
          <h2><Link to="/resume">Resume</Link></h2>
          <div className="resume-actions">
            <a className="button primary" href={PDF} download>
              Download PDF
            </a>
            <a className="button" href={PDF} target="_blank" rel="noopener noreferrer">
              View PDF
            </a>
            <span className="resume-pdf-note">One page, updated September 2026</span>
          </div>
          <div className="link-container">
            {Object.keys(sections).map((sec) => (
              <h4 key={sec}>
                <a href={`#${sec.toLowerCase()}`}>{sec}</a>
              </h4>))}
          </div>
        </div>
      </header>
      {Object.entries(sections).map(([name, Section]) => (
        <Section key={name} />
      ))}
    </article>
  </Main>
);

export default Resume;
