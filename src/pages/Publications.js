import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import PostCard from '../components/Publications/PostCard';
import publications from '../data/publications';

const BLOG_URL = 'https://ahammadshawki8.hashnode.dev/';

const Publications = () => (
  <Main
    title="Publications"
    description="Technical articles by Ahammad Shawki, published on Hashnode and freeCodeCamp News."
  >
    <article className="post" id="publications">
      <header>
        <div className="title">
          <h2><Link to="/publications">Publications</Link></h2>
          <p>
            Long-form technical writing. Two of these were published on freeCodeCamp News,
            the rest on my own blog. Each one opens in a new tab.
          </p>
        </div>
      </header>

      <div className="publication-grid">
        {publications.map((post) => (
          <PostCard data={post} key={post.url} />
        ))}
      </div>

      <p className="publication-footer">
        Everything I write lives at{' '}
        <a href={BLOG_URL} target="_blank" rel="noopener noreferrer">
          ahammadshawki8.hashnode.dev
        </a>.
      </p>
    </article>
  </Main>
);

export default Publications;
