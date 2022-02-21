import React, { Component } from 'react'
import {ALGO_LIST} from '../constants/hamBurgNavBarConstant';

export default class navLink extends Component {
  render() {
    return (
        <ul>
            <li>
                <a href="">{ALGO_LIST[0]}</a>
            </li>
            <li>
                <a href="">{ALGO_LIST[1]}</a>
            </li>
            <li>
                <a href="">{ALGO_LIST[2]}</a>
            </li>
            <li>
                <a href="">{ALGO_LIST[3]}</a>
            </li>
            <li>
                <a href="">{ALGO_LIST[4]}</a>
            </li>
        </ul>
    )
  }
}
