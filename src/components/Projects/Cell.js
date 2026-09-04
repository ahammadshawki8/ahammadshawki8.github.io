import React from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';

const { PUBLIC_URL } = process.env;

// Deterministic hue per project, so the generated tiles stay stable between builds
// instead of reshuffling every time the list is reordered.
const hueFor = (title) => {
  let hash = 0;
  for (let i = 0; i < title.length; i += 1) {
    hash = (hash * 31 + title.charCodeAt(i)) % 360;
  }
  return hash;
};

const initialsFor = (title) => title
  .replace(/[^A-Za-z0-9 ]/g, ' ')
  .split(/\s+/)
  .filter(Boolean)
  .slice(0, 2)
  .map((word) => word[0].toUpperCase())
  .join('');

const Cell = ({ data }) => {
  const {
    title, link, repo, image, date, desc, tags, award, event,
  } = data;

  const hue = hueFor(title);
  const media = image ? (
    <img src={`${PUBLIC_URL}${image}`} alt={`${title} preview`} loading="lazy" />
  ) : (
    <span
      className="project-tile"
      style={{
        background: `linear-gradient(135deg, hsl(${hue}, 42%, 32%), hsl(${(hue + 40) % 360}, 46%, 20%))`,
      }}
    >
      <span className="project-tile-initials">{initialsFor(title)}</span>
      <span className="project-tile-name">{title}</span>
    </span>
  );

  const primaryIsSource = Boolean(link && link.includes('github.com'));

  return (
    <article className="project-card">
      <a
        className="project-media"
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Open ${title}`}
      >
        {media}
        {award && <span className="project-award-flag">Award</span>}
      </a>

      <div className="project-body">
        <header className="project-header">
          <h3 className="project-title">
            <a href={link} target="_blank" rel="noopener noreferrer">{title}</a>
          </h3>
          <time className="project-date" dateTime={date}>
            {dayjs(date).format('MMMM YYYY')}
          </time>
        </header>

        {award && <p className="project-award">{award}</p>}
        {event && <p className="project-event">{event}</p>}

        <p className="project-desc">{desc}</p>

        {tags && tags.length > 0 && (
          <ul className="project-tags">
            {tags.map((tag) => <li key={tag}>{tag}</li>)}
          </ul>
        )}

        <div className="project-links">
          <a href={link} target="_blank" rel="noopener noreferrer">
            {primaryIsSource ? 'Source' : 'View project'}
          </a>
          {repo && <a href={repo} target="_blank" rel="noopener noreferrer">Source</a>}
        </div>
      </div>
    </article>
  );
};

Cell.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    link: PropTypes.string,
    repo: PropTypes.string,
    image: PropTypes.string,
    date: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string),
    award: PropTypes.string,
    event: PropTypes.string,
  }).isRequired,
};

export default Cell;
