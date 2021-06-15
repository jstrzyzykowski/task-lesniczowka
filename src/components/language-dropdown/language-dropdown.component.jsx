import React from 'react'

import {ReactComponent as Flag} from '../../assets/vectors/languages-flag.svg';
import {ReactComponent as Arrow} from '../../assets/vectors/languages-dropdown-icon.svg';

import './language-dropdown.styles.scss';

export default function LanguageDropdown() {
  return (
    <div className='language-dropdown'>
      <Flag className='flag'/>
      <Arrow className='arrow'/>
    </div>
  );
}