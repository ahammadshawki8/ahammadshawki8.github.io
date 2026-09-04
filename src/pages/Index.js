import React from 'react';
import { Link } from 'react-router-dom';
import dayjs from 'dayjs';

import Main from '../layouts/Main';

import awards from '../data/resume/awards';
import testimonials from '../data/testimonials';
import projects from '../data/projects';

const featured = projects.filter((p) => p.award).slice(0, 3);

const Index = () => (
  <Main
    description={
      'Ahammad Shawki is a software engineer and Computer Science undergraduate at BUET, '
      + 'building agentic AI systems, machine learning tools and full-stack products.'
    }
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2><Link to="/">Software Engineer, AI Systems and Full-Stack</Link></h2>
          <p>
            Computer Science and Engineering at BUET. I build systems where a language model has to
            be right, not just fluent.
          </p>
        </div>
      </header>
      <p>
        Most of my work sits where an AI system meets a requirement to be correct: an options agent
        that prices its own exit before it enters a trade, an agent fleet that repairs a spreadsheet
        and proves it by recalculating the file, a forensics layer that will not let a model assert
        anything it cannot ground in evidence. The principle underneath all of it is the same. Give
        the model the smallest job that only it can do, and make everything around it deterministic
        and reproducible.
      </p>
      <p>
        Read more <Link to="/about">about me</Link>, look through my{' '}
        <Link to="/resume">resume</Link> or <Link to="/projects">projects</Link>, browse my{' '}
        <Link to="/publications">writing</Link>, or <Link to="/contact">get in touch</Link>.
      </p>
    </article>

    <article className="post" id="awards">
      <header>
        <div className="title">
          <h2>Awards and Honors</h2>
          <p>
            32 hackathons entered, 4 of them won. Selected recognition, most recent first.
          </p>
        </div>
      </header>
      <ul className="award-list">
        {awards.map((award) => (
          <li className="award-item" key={`${award.title}-${award.org}`}>
            <div className="award-year">{dayjs(award.date).format('YYYY')}</div>
            <div className="award-detail">
              <h3 className="award-title">
                {award.link ? (
                  <a href={award.link} target="_blank" rel="noopener noreferrer">{award.title}</a>
                ) : award.title}
                {award.project && <span className="award-project">{award.project}</span>}
              </h3>
              <p className="award-org">{award.org}</p>
              <p className="award-summary">{award.summary}</p>
            </div>
          </li>
        ))}
      </ul>
      <p className="award-footer">
        The winning projects are{' '}
        {featured.map((p, i) => (
          <span key={p.title}>
            {i > 0 && (i === featured.length - 1 ? ' and ' : ', ')}
            <a href={p.link} target="_blank" rel="noopener noreferrer">{p.title}</a>
          </span>
        ))}
        . All of them, and the rest, are on the <Link to="/projects">projects page</Link>.
      </p>
    </article>

    <article className="post" id="recommendations">
      <header>
        <div className="title">
          <h2>Recommendations</h2>
          <p>What people I have worked with have said, in their own words.</p>
        </div>
      </header>
      <div className="quote-grid">
        {testimonials.map((t) => (
          <figure className="quote-card" key={t.name}>
            <blockquote className="quote-text">{t.quote}</blockquote>
            <figcaption className="quote-attribution">
              <span className="quote-name">{t.name}</span>
              <span className="quote-title">{t.title}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </article>

    <article className="post" id="cta">
      <header>
        <div className="title">
          <h2>Available for Work</h2>
          <p>Open to internships, contract work and collaboration.</p>
        </div>
      </header>
      <p>
        I take on full-stack product work, AI and agentic systems, machine learning, and the backend
        and infrastructure underneath them. If you have something you want built, tell me about it.
      </p>
      <ul className="actions">
        <li><Link to="/contact" className="button">Work with me</Link></li>
      </ul>
    </article>
  </Main>
);

export default Index;
