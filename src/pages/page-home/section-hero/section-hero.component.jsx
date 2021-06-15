import React from 'react'

import ShopWidget from '../../../components/shop-widget/shop-widget.component';
import Sausages from '../../../assets/images/kielbasy.png';
import FeatureList from '../../../components/feature-list/feature-list.component';

import './section-hero.styles.scss';

export default function SectionHero() {

  return (
    <div className='section-hero'>
      <div className='description'>
        <h1 className='desc-main'>Mięso prosto z natury</h1>
        <p className='desc-sub'>W Leśniczówce od blisko 30 lat kultywujemy<span> najlepszą tradycję </span>i <span> sprawdzone receptury produkcji dziczyzny </span>
        </p>
      </div>
      <div className='hero-image-container'>
        <img className='hero-image' src={Sausages} alt="Zdjęcie kiełbas" />
      </div>
      <FeatureList/>
      <ShopWidget/>
    </div>
  );
}