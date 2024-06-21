import React from 'react';

import spainMap from '../../maps/es.svg';
import "../../styles/main-style.scss";
import "../../styles/discoverpage.scss";

export default function Discover() {
  return (
    <div className='discover-page-wrapper'>
      <div>Discover</div>
      <img src={spainMap} alt='Spain'></img>
      <div className='interactive-map-wrapper'></div>
    </div>
  );
};
