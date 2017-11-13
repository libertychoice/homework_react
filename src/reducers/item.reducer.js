import {ADD_ITEM} from '../constants/actionConstants'
import { Set } from 'immutable';

const initValue = new Set();

const items = (state = initValue, action) => {
    //console.log(state);
    switch(action.type){
	case ADD_ITEM:
	    return state.add(action.item.title);
	default:
	    return initValue;

}
};


export default items;