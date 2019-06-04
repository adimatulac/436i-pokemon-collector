import { combineReducers } from 'redux';

const initState = [
	{
		id: 50, 
		title: "carrots", 
		details: "bulbasaur"
	},
	{
		id: 51, 
		title: "tater tot", 
		details: "charizard"
	},
	{
		id: 52, 
		title: "arsenic", 
		details: "squirtle"
	}
]

const rootReducer = (state = initState, action) => {
	switch (action.type) {
        case 'ADD_ITEM':
			return state.concat(action.payload);
        case 'DELETE_ITEM':
			return state.filter(item => {
				return item.id !== action.payload
			});
		// case 'OPEN_MODAL':
		// 	return {
		// 		...state,
		// 		modals: state.modals.concat(action.obj)
		// 	};
		// case 'CLOSE_MODAL':
		// 	return {
		// 		...state,
		// 		modals: state.modals.filter(item => item.id !== action.obj.id)
		// 	};
        default:
            return state;
    }
}

export default combineReducers({ 
	items: rootReducer
});
