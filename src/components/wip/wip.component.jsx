import React from 'react'

import './wip.styles.scss';

export default function WorkInProgress({pageName}) {
  return (
    <div className='section-wip'>
      <div className='wip-text-container'>
        <p className='text-header'>Legendy głoszą, że...</p>
        <p className='text-description'>strona <span>{pageName}</span> wkrótce się pojawi!</p>
      </div>
    </div>
  );
}