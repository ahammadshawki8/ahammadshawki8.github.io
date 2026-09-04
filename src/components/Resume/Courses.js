import React from 'react';
import PropTypes from 'prop-types';

import Course from './Courses/Course';

// Groups render in this order; anything else falls to the end alphabetically.
const GROUP_ORDER = ['BUET', 'Online'];

const GROUP_LABELS = {
  BUET: 'Bangladesh University of Engineering and Technology',
  Online: 'Self-directed and online',
};

const groupBy = (courses) => courses.reduce((acc, course) => {
  const key = course.university || 'Other';
  return { ...acc, [key]: [...(acc[key] || []), course] };
}, {});

const orderGroups = (names) => [...names].sort((a, b) => {
  const ai = GROUP_ORDER.indexOf(a);
  const bi = GROUP_ORDER.indexOf(b);
  if (ai !== -1 && bi !== -1) return ai - bi;
  if (ai !== -1) return -1;
  if (bi !== -1) return 1;
  return a.localeCompare(b);
});

const Courses = ({ data }) => {
  const groups = groupBy(data);

  return (
    <div className="courses">
      <div className="link-to" id="courses" />
      <div className="title">
        <h3>Courses</h3>
      </div>
      {orderGroups(Object.keys(groups)).map((name) => {
        const items = [...groups[name]].sort((a, b) => a.number.localeCompare(b.number));
        return (
          <div className="course-group" key={name}>
            <h4 className="course-group-title">{GROUP_LABELS[name] || name}</h4>
            <ul className="course-list">
              {items.map((course, idx) => (
                <Course
                  data={course}
                  key={course.title}
                  last={idx === items.length - 1}
                />
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
};

Courses.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    number: PropTypes.string,
    link: PropTypes.string,
    university: PropTypes.string,
  })),
};

Courses.defaultProps = {
  data: [],
};

export default Courses;
