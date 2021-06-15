import React from 'react'

import TraditionImage from '../../../assets/images/tradition-image-1.jpg';
import {ReactComponent as IconMoreArrow} from '../../../assets/vectors/icon-more-arrow.svg';

import './section-tradition.styles.scss';

export default function SectionTradition() {
  return (
    <div className='section-tradition'>
      <div className='content-container'>
        <div className='tradition-image-container'>
          <img className='tradition-image' src={TraditionImage} alt="" />
        </div>
        <div className='tradition-text-container'>
          <p className='header'>Tradycja i autentyczność</p>
          <h2 className='title'>przetwórstwo dziczyzny leśniczówka</h2>
          <p className='description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vestibulum aliquam cursus. Mauris molestie aliquam urna. Curabitur nec eleifend risus. Integer eget libero sed elit pharetra ultricies eu in augue. Nullam nunc justo, porttitor id semper nec, pharetra sit amet enim. Donec rutrum diam vel est cursus lobortis.</p>
          <div className='tradition-more-container'>
            <IconMoreArrow className='icon-more-arrow'/>
            <p className='more-text'>dowiedz się więcej o nas</p>
          </div>
        </div>
      </div>
      <div className='specials-header'>
        <p>poznaj nasze specjały</p>
      </div>
    </div>
  );
}