import React from 'react'
import {NavLink} from 'react-router-dom';

import './navigation-list-item.styles.scss';

export default function NavigationListItem({data, setMobileToggle}) {

  const {name, linkURL} = data;

  return (
    <li className='navigation-list-item'>
      <NavLink className='nav-link' exact to={linkURL} onClick={() => setMobileToggle(false)}>
        {name}
      </NavLink>
    </li>
  );
}