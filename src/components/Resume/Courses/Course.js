import React from 'react';
import PropTypes from 'prop-types';

const Course = ({ data, last }) => {
  const label = (
    <>
      <h4 className="course-number">{data.number}:</h4>
      <p className="course-name">{data.title}</p>
    </>
  );

  return (
    <li className="course-container">
      {data.link
        ? <a href={data.link} target="_blank" rel="noopener noreferrer">{label}</a>
        : <span className="course-static">{label}</span>}
      {!last && <div className="course-dot"><p className="course-name"> &#8226;</p></div>}
    </li>
  );
};

Course.propTypes = {
  data: PropTypes.shape({
    link: PropTypes.string,
    number: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
  last: PropTypes.bool,
};

Course.defaultProps = {
  last: false,
};

export default Course;
