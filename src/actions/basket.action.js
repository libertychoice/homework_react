import { ADD_ITEM } from '../constants/actionConstants'

export const addItem = (item) => {
    return {
	    type: ADD_ITEM,
	    item,
    };
}