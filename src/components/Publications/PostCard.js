import React from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';

const PostCard = ({ data }) => {
  const {
    title, url, date, readTime, cover, brief, publisher,
  } = data;

  return (
    <article className="post-card">
      <a
        className="post-card-media"
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Read ${title}`}
      >
        {cover
          ? <img src={cover} alt={`Cover for ${title}`} loading="lazy" />
          : <span className="post-card-tile" aria-hidden="true" />}
      </a>

      <div className="post-card-body">
        <p className="post-card-meta">
          <time dateTime={date}>{dayjs(date).format('D MMMM YYYY')}</time>
          <span className="post-card-dot" aria-hidden="true">&#8226;</span>
          <span>{readTime} min read</span>
          {publisher && (
            <>
              <span className="post-card-dot" aria-hidden="true">&#8226;</span>
              <span>{publisher}</span>
            </>
          )}
        </p>

        <h3 className="post-card-title">
          <a href={url} target="_blank" rel="noopener noreferrer">{title}</a>
        </h3>

        <p className="post-card-brief">{brief}</p>

        <a
          className="post-card-link"
          href={url}
          target="_blank"
          rel="noopener noreferrer"
        >
          Read the article
        </a>
      </div>
    </article>
  );
};

PostCard.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    readTime: PropTypes.number,
    cover: PropTypes.string,
    brief: PropTypes.string.isRequired,
    publisher: PropTypes.string,
  }).isRequired,
};

export default PostCard;
