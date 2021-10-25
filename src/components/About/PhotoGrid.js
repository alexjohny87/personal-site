/* eslint-disable */
import React from 'react';
import Gallery from 'react-grid-gallery';
import { IMAGES } from '../../data/about/images';

const PhotoGrid = () => (
    <>
        <h3>Parks &amp; States Visited</h3>
        <Gallery images={IMAGES}/>
    </>
);

export default PhotoGrid;