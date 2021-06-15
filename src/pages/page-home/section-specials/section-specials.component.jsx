import React from 'react'
import Carousel, { slidesToShowPlugin } from '@brainhubeu/react-carousel';

import CarouselImageOne from '../../../assets/images/carousel-image-1.jpg';
import CarouselImageTwo from '../../../assets/images/carousel-image-2.jpg';
import {ReactComponent as IconMoreArrow} from '../../../assets/vectors/icon-more-arrow.svg';

import './section-specials.styles.scss';
import '@brainhubeu/react-carousel/lib/style.css';

export default function SectionSpecials() {
  return (
    <div className='section-specials'>
      <Carousel
      plugins={[
        'centered',
        'infinite',
        'arrows',
       {
         resolve: slidesToShowPlugin,
         options: {
          numberOfSlides: 3,
         },
       },
     ]}  
      >
        <div className='carousel-item'>
          <img className='carousel-item-image' src={CarouselImageOne} alt='zdjęcie wędliny tradycyjne'/>
          <div className='description-container'>
            <p className='title'>tradycyjne</p>
            <div className='special-more'>
              <IconMoreArrow className='icon-more-arrow'/>
              <span>zobacz</span>
            </div>
          </div>
        </div>

        <div className='carousel-item'>
          <img className='carousel-item-image' src={CarouselImageOne} alt='zdjęcie wędliny dojrzewające'/>
          <div className='description-container'>
            <p className='title'>dojrzewające</p>
            <div className='special-more'>
              <IconMoreArrow className='icon-more-arrow'/>
              <span>zobacz</span>
            </div>
          </div>
        </div>

        <div className='carousel-item'>
          <img className='carousel-item-image' src={CarouselImageTwo} alt='zdjęcie wędliny wędzonki'/>
          <div className='description-container'>
            <p className='title'>wędzonki</p>
            <div className='special-more'>
              <IconMoreArrow className='icon-more-arrow'/>
              <span>zobacz</span>
            </div>
          </div>
        </div>

      </Carousel>
    </div>
  );
}