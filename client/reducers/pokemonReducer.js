// import { FETCH_POKEMON_BEGIN, FETCH_POKEMON_SUCCESS, FETCH_POKEMON_FAILURE} from '../actions/types';
import { FETCH_POKEMON, ADD_POKEMON, DELETE_POKEMON, EDIT_POKEMON, FILTER_BY_TYPE} from '../actions/types';

// import { combineReducers } from 'redux';

const initialState = [];

export default function pokemonReducer(state = initialState, action) {
	switch(action.type) {
		case FETCH_POKEMON:
			return action.payload;

		case ADD_POKEMON:
			return Object.assign([], state, [ ...state, action.payload ]);

		case DELETE_POKEMON:
			return (deleteOnePokemon(state, action.payload._id));

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
		return poke._id !== givenID._id;
	});
	console.log(newList);
	return newList;
}