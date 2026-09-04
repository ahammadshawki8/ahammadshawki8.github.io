import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => {
  const { pathname } = useLocation();
  const onResume = pathname.includes('/resume');

  return (
    <section id="sidebar">
      <section id="intro">
        <Link to="/" className="logo">
          <img src={`${PUBLIC_URL}/images/me.jpg`} alt="Ahammad Shawki" />
        </Link>
        <header>
          <h2>Ahammad Shawki</h2>
          <p><a href="mailto:ahammadshawki8@gmail.com">ahammadshawki8@gmail.com</a></p>
        </header>
      </section>

      <section className="blurb">
        <h2>About</h2>
        <p>
          Hey there, I am Ahammad. I am a Computer Science and Engineering undergraduate at{' '}
          <a href="https://cse.buet.ac.bd/">BUET</a>, and I build AI-native software: agentic
          systems, machine learning tools and the full-stack products around them. I run{' '}
          <a href="https://github.com/SrotDev">SrotDev</a>, an engineering collective I founded.
          Previously founder of{' '}
          <a href="https://the-as8-organization.github.io/">The AS8 Organization</a> and President
          of Web and App Development at <a href="https://nditc.net/">NDITC</a>.
        </p>
        <ul className="actions">
          <li>
            {onResume
              ? <Link to="/about" className="button">About Me</Link>
              : <Link to="/resume" className="button">Learn More</Link>}
          </li>
        </ul>
      </section>

      <section id="footer">
        <ContactIcons />
        <p className="copyright">
          &copy; {new Date().getFullYear()} <Link to="/">ahammadshawki8.github.io</Link>.
        </p>
      </section>
    </section>
  );
};

export default SideBar;
