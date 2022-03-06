import React, { Component } from 'react';
import SortingAlgoInputCollection from '../components/sortingAlgoInputCollection';
import {INPUT_COLLECTION_TYPE_SORTING, INPUT_COLLECTION_TYPE_INVALID} from '../constants/inputCollectionConstants';

class InputCollectionScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    static getDerivedStateFromProps(props, state) {
        let {inputCollectionType} = props;
        return {
            inputCollectionType: inputCollectionType
        };
    }

    getTypeSpecificInputCollectComponent() {
        switch(this.state.inputCollectionType) {
            case INPUT_COLLECTION_TYPE_SORTING:
                return <SortingAlgoInputCollection></SortingAlgoInputCollection>;
            default:
                return <div>{INPUT_COLLECTION_TYPE_INVALID}</div>
        }
    }


    render() {
        let inputCollectionTypeComponent = this.getTypeSpecificInputCollectComponent();
        return (
            <div>
                {inputCollectionTypeComponent}
            </div>
        )
    }
}

export default InputCollectionScreen;