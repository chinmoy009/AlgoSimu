import React, { Component } from 'react'
import {SORTING_INPUT_COLLECTION_COMMAND, ENTER_A_VALUE_TO_INSERT_INTO_ARRAY, ARRAY_CAN_NOT_BE_EMPTY, NO_ITEM_TO_DELETE} from '../constants/inputCollectionConstants';
import { MESSAGE_TYPE_DANGER, MESSAGE_TYPE_WARNING } from '../constants/messageBoxConstant';
import {isNullOrEmpty, isEmptyArray} from '../commonServices/util.svc';
import ArrayComponent from './arrayComponent';
import MessageBox from './messageBox';
import {connect} from 'react-redux';
import {clearArrayInput, storeArrayInput} from '../actions/arrayInputAction';

class SortingAlgoInputCollection extends Component {
  
  constructor(props) {
      super(props);
      let defaultMessageSetup = this.getDefaultMessageSetup();
      this.state = {
          itemRecordedOnInputBox: null,
          arrayItems: [],
          currentItemId: 0,
          ...defaultMessageSetup
      }
  }

  componentDidMount() {
    this.props.clearArrayInput();
  }

  getDefaultMessageSetup() {
    return {
      message: null,
      messageType: null,
      messageNeedsToBeShown: false
    }
  }

  setItemRecordedOnInputBox(value) {
    this.setState({
        ...this.state,
        itemRecordedOnInputBox: value,
        ...this.getDefaultMessageSetup()
    });
  }

  itemAdded(e) {
    if(!isNullOrEmpty(this.state.itemRecordedOnInputBox)) {
        this.state.arrayItems.push({
          value: this.state.itemRecordedOnInputBox,
          _id: this.state.currentItemId
        });
        this.setState({
            ...this.state,
            itemRecordedOnInputBox: null,
            currentItemId: this.state.currentItemId + 1,
            ...this.getDefaultMessageSetup()
            
        });
    } else {
        this.showMessage(ENTER_A_VALUE_TO_INSERT_INTO_ARRAY, MESSAGE_TYPE_DANGER);
    }
  }

  endInputCollection(e) {
    if(!isEmptyArray(this.state.arrayItems)) {
      this.props.storeArrayInput(this.state.arrayItems);
    } else {
      this.showMessage(ARRAY_CAN_NOT_BE_EMPTY, MESSAGE_TYPE_DANGER);
    }
  }

  deleteLastItem(e) {
    if(!isEmptyArray(this.state.arrayItems)) {
      this.state.arrayItems.splice(-1);
      this.setState({
        ...this.state,
        currentItemId: this.state.currentItemId - 1,
        ...this.getDefaultMessageSetup()
      });
    } else {
      this.showMessage(NO_ITEM_TO_DELETE, MESSAGE_TYPE_WARNING);
    }
  }

  showMessage(message, messageType) {
    this.setState({
      ...this.state,
      messageNeedsToBeShown: true,
      message: message,
      messageType: messageType
    })
  }

  render() {
    return (
      <div>
        <div class="input-comp">
            <div class="row">
              {this.state.messageNeedsToBeShown 
                ? <MessageBox message={this.state.message} messageType={this.state.messageType}></MessageBox>
                : <div></div>}
            </div>
            <p class="input-command">{SORTING_INPUT_COLLECTION_COMMAND}</p>
            <div class="row">
                <div class="col-md-4">
                  <input type="number" class="sorting-item-input" id="itemRecordedOnInputBox" onChange={ e => this.setItemRecordedOnInputBox(e.target.value)}/>
                </div>
                <div class="col-md-1">
                  <button type="button" class="btn btn-primary" onClick={(e) => this.itemAdded(e)}>
                      <i class="fa fa-plus"></i>
                  </button>
                </div>
                 <div class="col-md-1">
                  <button type="button" class="btn btn-secondary" onClick = {(e) => this.deleteLastItem(e)}>
                      <i class="fa fa-minus"></i>
                  </button>
                </div>
                <div class="col-md-2">
                  <button type="button" class="btn btn-success" onClick = {(e) => this.endInputCollection(e)}>Done</button>
                </div>  
                <div class="col-md-4"></div>
            </div>
            <br/>
            <br/>
            <div class="row">
              <div class="col-md-12">
                <ArrayComponent items={this.state.arrayItems}></ArrayComponent>
              </div>
            </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  arrayItems: state.arrayItems.items
});

const mapDispatchToProps = {
  storeArrayInput,
  clearArrayInput
};

export default connect(mapStateToProps, mapDispatchToProps) (SortingAlgoInputCollection);
