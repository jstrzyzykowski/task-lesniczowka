import React from 'react'

import {ReactComponent as CartIcon} from '../../assets/vectors/cart-icon.svg';

import './shop-widget.styles.scss';

export default function ShopWidget() {
  return (
    <div className='shop-widget-container'>
      <div className='icon-container'>
        <CartIcon className='cart-icon'/>
        <CartIcon className='cart-icon'/>
      </div>
      <div className='text-container'>
        <p>sklep</p>
        <p>on-line</p>
      </div>
    </div>
  );
}