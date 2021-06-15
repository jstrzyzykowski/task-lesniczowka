import React, { useState } from 'react'
import {Link} from 'react-router-dom';
import {useWindowScroll} from 'react-use';

import {ReactComponent as LogoMain} from '../../assets/vectors/logo-main.svg';
import {ReactComponent as LogoSub} from '../../assets/vectors/logo-sub.svg';
import LanguageDropdown from '../language-dropdown/language-dropdown.component';
import NavigationList from './navigation-list/navigation-list.component';

import './navigation.styles.scss';

export default function Navigation() {
  const {x, y} = useWindowScroll();
  const [mobileToggle, setMobileToggle] = useState(false);

  return (
    <div className={`${y ? 'scrolled' : ''} navigation`}>
      <div className='logo'>
        <Link to='/'>
          <LogoMain className='logo-main'/>
          <LogoSub className='logo-sub'/>
        </Link>
      </div>
      <div className='menu-container'>
        <div className={`${mobileToggle ? 'active' : ''} mobile-button`} onClick={() => setMobileToggle((prevValue) => !prevValue)}>
          <div className='bar'/>
          <div className='bar'/>
          <div className='bar'/>
        </div>
        <NavigationList mobileToggle={mobileToggle} setMobileToggle={setMobileToggle}/>
        <LanguageDropdown/>
      </div>
    </div>
  );
}