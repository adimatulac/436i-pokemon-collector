export const addItem = (item) => {
	return {
		type: 'ADD_ITEM',
		payload: item
	}
}

export const deleteItem = (id) => {
	return {
		type: 'DELETE_ITEM',
		payload: id
	}
}

// export const openModal = (obj) => {
// 	return {
// 		type: 'OPEN_MODAL',
// 		obj
// 	};
// };

// export const closeModal = (obj) => {
// 	return {
// 		type: 'CLOSE_MODAL',
// 		obj
// 	};
// };