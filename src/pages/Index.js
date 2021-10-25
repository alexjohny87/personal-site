import React from 'react';
import { Link } from 'react-router-dom';
import TypeWriter from 'react-typewriter';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description="Alex Johny first website iteration"
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2 data-testid="heading">
            <TypeWriter typing={1}>
              Welcome&nbsp;
            </TypeWriter>
            👋🏽
          </h2>
        </div>
      </header>
      <p>Hi, I&apos;m Alex!
        I&apos;m a UMD alum 🐢 who&apos;s currently a software engineer at <a href="https://squareup.com">Square</a>. Before Square I was
        at <a href="https://www.goldmansachs.com/">Goldman Sachs</a>
        , <a href="https://facebook.com">Facebook</a>,
        and <a href="https://boozallen.com">Booz Allen Hamilton</a>. I&apos;m passionate about building high impact products and new things.
      </p>
      <p>
        I&apos;m a huge fan of reading the news, and follow both global and local politics closely.
        My hobbies are playing basketball, making pottery, binging Youtube videos, and hiking.
      </p>
      <p>
        Feel free to <Link to="/contact">contact</Link> me if you have any questions or just want to say hello!
      </p>
    </article>
  </Main>
);

export default Index;
