import React, { Component } from 'react';
import '../styles/arrayStyle.css';
import ArrayItem from './arrayItem';
import {isEmptyArray} from '../commonServices/util.svc';

class ArrayComponent extends Component {
  constructor(props) {
      super(props);
      this.state = {
          items: props.items
      };
  }
    
  getArrayProduct() {
    return !isEmptyArray(this.state.items) 
      ? this.state.items.map(item => 
        <td>{item.value}</td>
      ) : null;
  }
  

  render() {
    // let array = !isEmptyArray(this.state.items) ? this.state.items.map(item => <td>{item.value}</td>) : null;
    let array = this.getArrayProduct();
    return (
      <div>
        {array != null ? (<div>
        <table>
          <tboady>
            <tr>
              {array}
            </tr>
          </tboady>
        </table>
      </div>) : <div></div>}
      </div>
    )
  }
}

export default ArrayComponent;
