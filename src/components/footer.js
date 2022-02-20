import React, { Component } from 'react'
import {FOOTER_NAME} from '../constants/footerConstant';

class Footer extends Component {
  render() {
    return (
      <div class="footer">
          <p>{FOOTER_NAME}</p>
      </div>
    )
  }
}

export default Footer;
