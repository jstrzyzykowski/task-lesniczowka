import React from 'react'

import PortraitImageOne from '../../../assets/images/portrait-chef-butcher-1.png';
import PortraitImageTwo from '../../../assets/images/portrait-chef-butcher-2.png';

import './section-owner.styles.scss';

export default function SectionOwner() {
  return(
    <div className='section-owner'>
      <img className='portrait-image-one' src={PortraitImageOne} alt="" />
      <img className='portrait-image-two' src={PortraitImageTwo} alt="" />
      <div className='owner-text-container'>
        <p className='owner-title'>w zgodzie z tradycją jak za naszych ojców</p>
        <p className='owner-signature'>Piotr i Wojciech</p>
      </div>
    </div>
  );
}