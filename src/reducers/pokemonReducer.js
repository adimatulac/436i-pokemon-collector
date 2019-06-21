// import { FETCH_POKEMON_BEGIN, FETCH_POKEMON_SUCCESS, FETCH_POKEMON_FAILURE} from '../actions/types';
import { FETCH_POKEMON, ADD_POKEMON, DELETE_POKEMON, EDIT_POKEMON, FILTER_BY_TYPE} from '../actions/types';

// import { combineReducers } from 'redux';

const initialState = [];

export default function pokemonReducer(state = initialState, action) {
	switch(action.type) {
		case FETCH_POKEMON:
			return action.payload;
			// return { ...state, pokemon: action.payload};
		case ADD_POKEMON:
			// return Object.assign({}, state, {
			// 	pokemon: action.payload
			// });
			return Object.assign([], state, [ ...state, action.payload ]);
			// return state.concat(action.payload);
		case DELETE_POKEMON:
			// state is object or array?
			let newState = state;
			return (deleteOnePokemon(newState, action.payload.id));
			// return state.filter(poke => {
			// 	return poke.id != action.payload.id.id;
			// });
			// this.setState(deleteOnePokemon(state, action.payload.id));
			// let obj = Object.assign({}, state, {
			// 	 ...state, 
			// 	 pokemon: deleteOnePokemon(state, action.payload.id)
			// 	});
			// return obj;
		case EDIT_POKEMON:
			return action.payload;
		case FILTER_BY_TYPE:
			return action.payload;
		default:
			return state;
	}
}

function deleteOnePokemon(state, givenID) {
	let newList = state.filter(poke => {
		return poke.id !== givenID.id;
	});
	console.log(newList);
	return newList;
}

// const initState = [
// 	{
// 		id: 1, 
// 		title: "carrots", 
// 		details: "bulbasaur"
// 	},
// 	{
// 		id: 2, 
// 		title: "tater tot", 
// 		details: "charmander"
// 	},
// 	{
// 		id: 3, 
// 		title: "arsenic", 
// 		details: "squirtle"
// 	},
// 	{
// 		id: 4, 
// 		title: "captain hook", 
// 		details: "psyduck"
// 	},
// 	{
// 		id: 5, 
// 		title: "thor", 
// 		details: "oddish"
// 	},
// 	{
// 		id: 6, 
// 		title: "juicebox", 
// 		details: "pikachu"
// 	}
// ]

// const rootReducer = (state = initState, action) => {
// 	switch (action.type) {
//         case 'ADD_item':
// 			return state.concat(action.payload);
//         case 'DELETE_item':
// 			return state.filter(item => {
// 				return item.id !== action.payload
// 			});
//         default:
//             return state;
//     }
// }

// export default combineReducers({ 
// 	items: rootReducer
// });
