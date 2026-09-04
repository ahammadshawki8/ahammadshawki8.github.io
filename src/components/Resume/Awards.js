import React from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';

const Awards = ({ data }) => (
  <div className="awards">
    <div className="link-to" id="awards" />
    <div className="title">
      <h3>Awards</h3>
    </div>
    {data.map((award) => (
      <article className="award-container" key={`${award.title}-${award.org}`}>
        <header>
          <h4 className="award-heading">
            {award.link ? (
              <a href={award.link} target="_blank" rel="noopener noreferrer">{award.title}</a>
            ) : award.title}
          </h4>
          <p className="award-meta">
            {award.org}, {dayjs(award.date).format('YYYY')}
            {award.project && ` for ${award.project}`}
          </p>
        </header>
        <p className="award-summary">{award.summary}</p>
      </article>
    ))}
  </div>
);

Awards.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    org: PropTypes.string,
    date: PropTypes.string,
    project: PropTypes.string,
    link: PropTypes.string,
    summary: PropTypes.string,
  })),
};

Awards.defaultProps = {
  data: [],
};

export default Awards;
