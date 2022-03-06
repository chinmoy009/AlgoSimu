import { combineReducers } from 'redux';
import {arrayInputCollectionReducer} from '../reducers/arrayInputCollectionReducer';

const reducer = combineReducers({
    arrayItems: arrayInputCollectionReducer
});

export default reducer;