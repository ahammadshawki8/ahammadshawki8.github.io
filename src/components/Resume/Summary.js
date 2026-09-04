import React from 'react';
import PropTypes from 'prop-types';

const Summary = ({ data }) => (
  <div className="resume-summary">
    <div className="link-to" id="summary" />
    <div className="title">
      <h3>{data.headline}</h3>
    </div>

    {data.paragraphs.map((text) => (
      <p className="summary-text" key={text.slice(0, 40)}>{text}</p>
    ))}

    <ul className="highlight-grid">
      {data.highlights.map((h) => (
        <li className="highlight" key={h.label}>
          <span className="highlight-value">{h.value}</span>
          <span className="highlight-label">{h.label}</span>
          <span className="highlight-detail">{h.detail}</span>
        </li>
      ))}
    </ul>
  </div>
);

Summary.propTypes = {
  data: PropTypes.shape({
    headline: PropTypes.string,
    paragraphs: PropTypes.arrayOf(PropTypes.string),
    highlights: PropTypes.arrayOf(PropTypes.shape({
      value: PropTypes.string,
      label: PropTypes.string,
      detail: PropTypes.string,
    })),
  }).isRequired,
};

export default Summary;
