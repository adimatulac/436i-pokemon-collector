let nextItemId = 0;

export const addItem = (item) => {
	return {
		type: 'ADD_ITEM',
		id: nextItemId++,
		payload: item
	}
}

export const deleteItem = (id) => {
	return {
		type: 'DELETE_ITEM',
		id: id
	}
}