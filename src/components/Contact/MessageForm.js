import React, { useState } from 'react';
import PropTypes from 'prop-types';

/**
 * A static site has no backend to post to, so this composes the message and
 * hands it to the visitor's mail client. Gmail's compose URL is offered first
 * because most people reading this are already signed in to one, with a plain
 * mailto fallback for everyone else.
 */
const MessageForm = ({ address }) => {
  const [form, setForm] = useState({
    name: '', from: '', subject: '', message: '',
  });

  const update = (field) => (event) => setForm({ ...form, [field]: event.target.value });

  const subject = form.subject.trim() || 'Hello from your website';
  const body = [
    form.message.trim(),
    '',
    '---',
    form.name.trim() && `From: ${form.name.trim()}`,
    form.from.trim() && `Reply to: ${form.from.trim()}`,
  ].filter(Boolean).join('\n');

  const gmailHref = 'https://mail.google.com/mail/?view=cm&fs=1'
    + `&to=${encodeURIComponent(address)}`
    + `&su=${encodeURIComponent(subject)}`
    + `&body=${encodeURIComponent(body)}`;

  const mailtoHref = `mailto:${address}`
    + `?subject=${encodeURIComponent(subject)}`
    + `&body=${encodeURIComponent(body)}`;

  const ready = form.message.trim().length > 0;

  return (
    <form className="message-form" onSubmit={(e) => e.preventDefault()}>
      <div className="message-row">
        <label htmlFor="msg-name">
          Your name
          <input
            id="msg-name"
            type="text"
            value={form.name}
            onChange={update('name')}
            placeholder="Ada Lovelace"
            autoComplete="name"
          />
        </label>
        <label htmlFor="msg-from">
          Your email
          <input
            id="msg-from"
            type="email"
            value={form.from}
            onChange={update('from')}
            placeholder="you@example.com"
            autoComplete="email"
          />
        </label>
      </div>

      <label htmlFor="msg-subject">
        Subject
        <input
          id="msg-subject"
          type="text"
          value={form.subject}
          onChange={update('subject')}
          placeholder="A project I would like built"
        />
      </label>

      <label htmlFor="msg-message">
        Message
        <textarea
          id="msg-message"
          rows="6"
          value={form.message}
          onChange={update('message')}
          placeholder="What are you working on, and what do you need?"
        />
      </label>

      <ul className="actions message-actions">
        <li>
          <a
            className={`button primary${ready ? '' : ' disabled'}`}
            href={ready ? gmailHref : undefined}
            target="_blank"
            rel="noopener noreferrer"
            aria-disabled={!ready}
          >
            Send via Gmail
          </a>
        </li>
        <li>
          <a
            className={`button${ready ? '' : ' disabled'}`}
            href={ready ? mailtoHref : undefined}
            aria-disabled={!ready}
          >
            Use my mail app
          </a>
        </li>
      </ul>

      <p className="message-note">
        Both buttons open a pre-filled draft addressed to {address}. Nothing is sent until you
        press send yourself, and this page stores nothing.
      </p>
    </form>
  );
};

MessageForm.propTypes = {
  address: PropTypes.string.isRequired,
};

export default MessageForm;
