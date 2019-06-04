import { combineReducers } from 'redux';

const initState = [
	{
		id: 50, 
		title: "carrots", 
		details: "good for you"
	},
	{
		id: 51, 
		title: "tater tots", 
		details: "not really good for you"
	},
	{
		id: 52, 
		title: "arsenic", 
		details: "definitely not good for you"
	}
]

const rootReducer = (state = initState, action) => {
	switch (action.type) {
        case 'ADD_ITEM':
			return state.concat(action.payload);
			// return [
			// 	...state,
			// 	{
			// 		id: action.id,
			// 		title: action.title,
			// 		details: action.details
			// 	}
			// ]
        case 'DELETE_ITEM':
			return state.filter(item => {
				return item.id !== action.payload
			});
        default:
            return state;
    }
}

export default combineReducers({ 
	items: rootReducer
});
