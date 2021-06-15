import React from 'react'

import './empty.styles.scss';

export default function EmptyPage({history}) {
  return (
    <div className='empty-page'>
      <div className='wrapper'>
        <div className='empty-text-container'>
          <p className='empty-code'>404</p>
          <p className='empty-description'>Lorem ipsum dolor sit amet consectetur.</p>
        </div>
        <button className='empty-button' onClick={() => history.push('/')}>Home</button>
      </div>
    </div>
  );
}