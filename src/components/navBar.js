import React, { Component } from 'react'
import NavLink from './navLink'
import "../styles/navBar.css"
import {TiThMenuOutline} from 'react-icons/ti'


const navBar1={
  background : "red"
}

export default class navBar extends Component {
  render() {
    return (
        <nav className="navMenu">
          <TiThMenuOutline className="navMenu" size='40px' color='white' />
          <NavLink />
        </nav>
    )
  }
}
