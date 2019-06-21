import { FETCH_POKEMON, ADD_POKEMON, DELETE_POKEMON, EDIT_POKEMON, FILTER_BY_TYPE } from './types';
import axios from 'axios';

const apiURL = 'http://localhost:5000/api/pokemon/';

// async
export const addPokemon = ({ name, species, type }) => {
	return async (dispatch) => {
		try {
			const res = await axios.post(`${apiURL}`, { name, species, type });
			dispatch(addPokemonSuccess(res.data));
		}
		catch (err) {
			throw (err);
		}
	};
};

// sync
export const addPokemonSuccess = (data) => {
	return  {
		type: ADD_POKEMON,
		payload: {
			id: data.id,
			name: data.name,
			species: data.species,
			type: data.type
		}
	}
}

// async
export const deletePokemon = (id) => {
	return async (dispatch) => {
		try {
			const res = await axios.delete(`${apiURL}${id}`);
			// console.log(id);
			console.log(res.data);
			dispatch(deletePokemonSuccess(res.data));
		}
		catch (err) {
			throw (err);
		}
	};
};

// sync
export const deletePokemonSuccess = (id) => {
	return {
		type: DELETE_POKEMON,
		payload: {
			id
		}
	}
}

// async
export const fetchAllPokemon = () => {
	return async (dispatch) => {
		try {
			const res = await axios.get(apiURL);
			dispatch(fetchAllPokemonSuccess(res.data));
		}
		catch (err) {
			throw (err);
		}
	};
};

// sync
export const fetchAllPokemonSuccess = (pokemon) => {
	return {
		type: FETCH_POKEMON,
		payload: pokemon
	}
}

export const editPokemon = (id, body) => {
	return async (dispatch) => {
		try {
			const res = await axios.put(`${apiURL}${id}`, body);
			console.log(id);
			console.log(res.data);
			dispatch(editPokemonSuccess(res.data));
		}
		catch (err) {
			throw (err);
		}
	};
}

// sync
export const editPokemonSuccess = (data) => {
	return {
		type: EDIT_POKEMON,
		payload: {
			id: data.id,
			name: data.name,
			species: data.species,
			type: data.type
		}
	}
}

// async
export const filterByType = (type) => {
	return async (dispatch) => {
		try {
			const res = await axios.get(`${apiURL}${type}`);
			dispatch(filterByTypeSuccess(res.data));
		}
		catch (err) {
			throw (err);
		}
	};
};

//sync
export const filterByTypeSuccess = (pokemon) => {
	return {
		type: FILTER_BY_TYPE,
		payload: pokemon
	}
}

// export const addItem = (item) => {
// 	return {
// 		type: 'ADD_ITEM',
// 		payload: item
// 	}
// }

// export const deleteItem = (id) => {
// 	return {
// 		type: 'DELETE_ITEM',
// 		payload: id
// 	}
// }