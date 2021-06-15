import React from 'react'

import {ReactComponent as FreeBadge} from '../../assets/vectors/free-badge.svg';

import './feature-item.styles.scss';

export default function FeatureItem({data}) {
  const {regularText, boldText} = data;

  return (
    <div className='feature'>
          <div className='badge-container'>
            <FreeBadge className='badge'/>
          </div>
          <div className='feature-text-container'>
            <p className='feature-text'>{regularText} <span className='bold'>{boldText}</span></p>
          </div>
    </div>
  );
}