import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';
import ContactIcons from '../components/Contact/ContactIcons';
import MessageForm from '../components/Contact/MessageForm';

import services from '../data/services';

const EMAIL = 'ahammadshawki8@gmail.com';

const Contact = () => (
  <Main
    title="Hire Me"
    description={`Work with Ahammad Shawki on full-stack, AI and machine learning projects. Email ${EMAIL}`}
  >
    <article className="post" id="contact">
      <header>
        <div className="title">
          <h2><Link to="/contact">Work With Me</Link></h2>
          <p>
            Open to internships, contract work and collaboration. I reply to everything.
          </p>
        </div>
      </header>

      <p>
        I build software end to end, and I am most useful on problems where the interesting part is
        getting a system to be correct rather than merely getting it to run. Below is what I take
        on. If your problem does not fit neatly into one of these, it is still worth asking.
      </p>

      <div className="service-grid">
        {services.map((service) => (
          <section className="service-card" key={service.title}>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-desc">{service.desc}</p>
            <ul className="service-stack">
              {service.stack.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </section>
        ))}
      </div>
    </article>

    <article className="post" id="message">
      <header>
        <div className="title">
          <h2>Send Me a Message</h2>
          <p>
            Write it here and it opens as a draft in your own mail client, addressed to me.
          </p>
        </div>
      </header>

      <MessageForm address={EMAIL} />
    </article>

    <article className="post" id="elsewhere">
      <header>
        <div className="title">
          <h2>Find Me Elsewhere</h2>
        </div>
      </header>

      <div className="email-at">
        <p>
          Prefer to write directly? I am at{' '}
          <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.
        </p>
      </div>

      <ContactIcons />
    </article>
  </Main>
);

export default Contact;
