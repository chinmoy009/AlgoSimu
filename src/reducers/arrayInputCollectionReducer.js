import {ARRAY_INPUT_COLLECTION_CLEAR, ARRAY_INPUT_COLLECTION_COMPLETE} from '../constants/inputCollectionConstants';

const initialArrayInputCollectionState = {
    items: []
};

export const arrayInputCollectionReducer = (state = initialArrayInputCollectionState, action) => {
    switch(action.type) {
        case ARRAY_INPUT_COLLECTION_COMPLETE:
        case ARRAY_INPUT_COLLECTION_CLEAR:
            return {
                ...state,
                items: action.payload
            }
        default:
            return {
                ...state
            }
    }
};