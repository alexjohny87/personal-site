import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description="Alex Johny first website iteration"
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/">Welcome 👋🏽</Link></h2>
        </div>
      </header>
      <p>Hi, I&apos;m Alex.
        I&apos;m a UMD alum who&apos;s currently a software engineer @ <a href="https://squareup.com">Square</a>. Before Square I was
        at <a href="https://www.goldmansachs.com/">Goldman Sachs</a>
        , <a href="https://facebook.com">Facebook</a>,
        and <a href="https://boozallen.com">Booz Allen Hamilton</a>. <Link to="/contact">contact</Link> me!
      </p>
    </article>
  </Main>
);

export default Index;
