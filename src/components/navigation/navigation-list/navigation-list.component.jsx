import React from 'react'

import {links} from '../navigation.data';
import NavigationListItem from '../navigation-list-item/navigation-list-item.component';

import './navigation-list.styles.scss';

export default function NavigationList({mobileToggle, setMobileToggle}) {

  return (
    <ul className={`${mobileToggle ? 'mobile-active' : ''} navigation-list`}>
      {links.map((link) => (<NavigationListItem key={link.id} data={link} setMobileToggle={setMobileToggle}/>))}
    </ul>
  );
}