import { FETCH_POKEMON, ADD_POKEMON, DELETE_POKEMON, EDIT_POKEMON, FILTER_BY_TYPE } from './types';
import axios from 'axios';

const apiURL = 'http://localhost:5000/api/pokemon/';

// async
export const addPokemon = ({ name, species, type }) => {
	return (dispatch) => {
		return axios.post(`${apiURL}`, {name, species, type})
		.then(res => {
			dispatch(addPokemonSuccess(res.data))
		})
		.catch(err => {
			throw(err);
		});
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
	return (dispatch) => {
		return axios.delete(`${apiURL}${id}`)
		.then(res => {
			console.log(id);
			console.log(res.data);
			dispatch(deletePokemonSuccess(res.data))
		})
		.catch(err => {
			throw(err);
		});
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

//sync
export const fetchPokemon = (pokemon) => {
	return {
		type: FETCH_POKEMON,
		payload: pokemon
	}
}

// async
export const fetchAllPokemon = () => {
	return (dispatch) => {
		return axios.get(apiURL)
		.then(res => {
			dispatch(fetchPokemon(res.data))
		})
		.catch(err => {
			throw(err);
		});
	};
};

export const editPokemon = (id, body) => {
	return (dispatch) => {
		return axios.put(`${apiURL}${id}`, body)
		.then(res => {
			console.log(id);
			console.log(res.data);
			dispatch(editPokemonSuccess(res.data))
		})
		.catch(err => {
			throw(err);
		});
	};
}

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
	return (dispatch) => {
		return axios.get(`${apiURL}${type}`)
		.then(res => {
			dispatch(filterByTypeSuccess(res.data))
		})
		.catch(err => {
			throw(err);
		});
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