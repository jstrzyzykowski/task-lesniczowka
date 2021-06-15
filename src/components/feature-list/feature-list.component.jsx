import React from 'react'

import FeatureItem from '../feature-item/feature-item.component';
import {features} from './feature-list.data';

import './feature-list.styles.scss';

export default function FeatureList() {

  return (
    <div className='features'>
        {features.map((feature) => <FeatureItem key={feature.id} data={feature}/>)}
    </div>
  );
}