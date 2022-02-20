import React, { Component } from 'react'
import {NAME, MOTO} from '../constants/headerConstants' ;
import {Link} from 'react-router-dom';

 class Header extends Component {
  
  hamBurgerMenuClicked(e) {
      //TODO: There should be the fuctionality for passing data to parent to show/hide nav bar
  }


  render() {
    return (
        <div class="header">
        <a href="" class="icon" onClick={(e) => this.hamBurgerMenuClicked(e)}>
            <i class="fa fa-bars"></i> 
        </a>
        <Link to="/" class="logo">{NAME}</Link>
        <div class="header-right">
          <p>{MOTO}</p>
        </div>
      </div>
    )
  }
}

export default Header;
