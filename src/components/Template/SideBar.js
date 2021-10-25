import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Alex Johny</h2>
        <p><a href="mailto:alexjohny87@gmail.com">alexjohny87@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <ul className="actions">
        <li>
          <Link to="/contact" className="button">Learn More</Link>
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Alex Johny <Link to="/">alexjohny.com</Link>.</p>
    </section>
  </section>
);

export default SideBar;
