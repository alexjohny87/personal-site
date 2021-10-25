import React from 'react';
import { Link } from 'react-router-dom';
import Main from '../layouts/Main';

import Personal from '../components/Stats/Personal';
import MarkedUSMap from '../components/Stats/MapChart';
import PhotoGrid from '../components/About/PhotoGrid';
// import Site from '../components/Stats/Site';

const Stats = () => (
  <Main
    title="Random thing about me"
    description="Some statistics about Alex"
  >
    <article className="post" id="stats">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/about">Random stuff about me</Link></h2>
        </div>
      </header>
      <Personal />
      <PhotoGrid />
      <MarkedUSMap />
      {/* <Site /> */}
    </article>
  </Main>
);

export default Stats;
