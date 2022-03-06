import {ARRAY_INPUT_COLLECTION_CLEAR, ARRAY_INPUT_COLLECTION_COMPLETE} from '../constants/inputCollectionConstants';

export const storeArrayInput = (arrayItems) => (dispatch, getState) => {
    dispatch({
        type: ARRAY_INPUT_COLLECTION_COMPLETE,
        payload: arrayItems
    });
}


export const clearArrayInput = () => (dispatch, getState) => {
    dispatch({
        type: ARRAY_INPUT_COLLECTION_CLEAR,
        payload: []
    });
}