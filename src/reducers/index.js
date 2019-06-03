import { combineReducers } from 'redux';

const initState = {
	items: [
		{id: 1, text: "carrots", details: "good for you"},
		{id: 2, text: "tater tots", details: "not really good for you"},
		{id: 3, text: "arsenic", details: "definitely not good for you"}
	],
	text: '',
	details: ''
}

const deleteReducer = (state = initState, action) => {
	if (action.type === 'DELETE_ITEM') {
		let newItems = state.items.filter(item => {
			return item.id !== action.id
		});
		return {
			...state,
			items: newItems
		}
	}
	return state;
}

const addReducer = (state = initState, action) => {
	if (action.type === 'ADD_ITEM') {
		return [
			...state,
			{
				id: action.id,
				text: action.text,
				details: action.details
			}
		]
	}
	return state;
}

export default combineReducers({ 
	deleteReducer,
	addReducer
});
