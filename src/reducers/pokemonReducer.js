// import { FETCH_POKEMON_BEGIN, FETCH_POKEMON_SUCCESS, FETCH_POKEMON_FAILURE} from '../actions/types';
import { FETCH_POKEMON, ADD_POKEMON, DELETE_POKEMON, EDIT_POKEMON, FILTER_BY_TYPE} from '../actions/types';

// import { combineReducers } from 'redux';

const initialState = [];

export default function pokemonReducer(state = initialState, action) {
	switch(action.type) {
		case FETCH_POKEMON:
			return action.payload;
		case ADD_POKEMON:
			// return Object.assign({}, state, [ ...state, action.payload ]);
			return state.concat(action.payload);
		case DELETE_POKEMON:
			// return Object.assign({}, state, deleteOnePokemon(state, action.payload));
			return state.filter(item => {
				return item.id !== action.payload.id
			});
		case EDIT_POKEMON:
			return action.payload;
		case FILTER_BY_TYPE:
			return action.payload;
		default:
			return state;
	}
}

// function deleteOnePokemon(pokemon, givenID) {
// 	return pokemon.filter(poke => {
// 		return poke.id !== givenID;
// 	});
// }

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
