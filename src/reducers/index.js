import { combineReducers } from 'redux';

const initState = [
	{
		id: 1, 
		title: "carrots", 
		details: "bulbasaur"
	},
	{
		id: 2, 
		title: "tater tot", 
		details: "charmander"
	},
	{
		id: 3, 
		title: "arsenic", 
		details: "squirtle"
	},
	{
		id: 4, 
		title: "captain hook", 
		details: "psyduck"
	},
	{
		id: 5, 
		title: "thor", 
		details: "oddish"
	},
	{
		id: 6, 
		title: "juicebox", 
		details: "pikachu"
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
