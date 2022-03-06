import React, { Component } from 'react'
import {NAME, MOTO} from '../constants/headerConstants';
import {Link} from 'react-router-dom';

 class Header extends Component {
  
  hamBurgerMenuClicked(e) {
      console.log("Clicked");
  }


  render() {
    return (
        <div class="header">
        <a href="" class="icon" onClick={(e) => this.hamBurgerMenuClicked(e)}>
            <i class="fa fa-bars"></i> 
        </a>
        <Link to="/" class="logo">{NAME}</Link>
        <Link to="/sortingInput/selection">Selection sort demo</Link>
        <div class="header-right">
          <p>{MOTO}</p>
        </div>
      </div>
    )
  }
}

export default Header;
