import React, { Component } from 'react'
import {NAME, MOTO} from '../constants/headerConstants' ;
import {Link} from 'react-router-dom';

 class Header extends Component {
  render() {
    return (
        <div class="header">
        <Link to="/" class="logo">{NAME}</Link>
        <div class="header-right">
          <p>{MOTO}</p>
        </div>
      </div>
    )
  }
}

export default Header;
