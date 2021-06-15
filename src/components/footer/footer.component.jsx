import React from 'react'

import {ReactComponent as IconFacebook} from '../../assets/vectors/icon-facebook.svg';
import {ReactComponent as IconInstagram} from '../../assets/vectors/icon-instagram.svg';
import {ReactComponent as IconYoutube} from '../../assets/vectors/icon-youtube.svg';

import {ReactComponent as LogoMain} from '../../assets/vectors/logo-main.svg';
import {ReactComponent as LogoSub} from '../../assets/vectors/logo-sub.svg';

import {ReactComponent as BadgeCertified} from '../../assets/vectors/badge-certified.svg';
import {ReactComponent as BadgeFreeFill} from '../../assets/vectors/free-badge.svg';
import {ReactComponent as BadgeFreeEmpty} from '../../assets/vectors/badge-free-empty.svg';

import './footer.styles.scss';

export default function Footer() {
  return (
    <div className='footer'>
      <div className='main-container'>
        <div className='main-info'>
          <div className='socials'>
            <div className='social-container'>
              <IconFacebook className='social-icon'/>
            </div>
            <div className='social-container'>
              <IconInstagram className='social-icon'/>
            </div>
            <div className='social-container'>
              <IconYoutube className='social-icon'/>
            </div>
          </div>
          <div className='description'>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vestibulum aliquam cursus. Mauris molestie aliquam urna. Curabitur nec eleifend risus. Integer eget libero sed elit pharetra ultricies eu in augue.</p>
          </div>
        </div>
        <div className='main-logo'>
          <LogoMain className='logo-main'/>
          <LogoSub/>
        </div>
        <div className='main-badges'>
          <BadgeCertified className='badge'/>
          <BadgeFreeFill className='badge'/>
          <BadgeFreeEmpty className='badge'/>
        </div>
      </div>
      <div className='bar-container'>
        <p className='copyright'>Wszelkie prawa zastrzeżone Leśniczówka 2021</p>
        <p className='author'>Projekt strony internetowej: redMustang&#174;</p>
      </div>
    </div>
  );
}