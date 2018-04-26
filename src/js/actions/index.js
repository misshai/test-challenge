import {
	FETCH_ITEMS,
	SORT_ITEMS,
	FILTER_ITEMS
} from './types';
export const fetchItems = () => async dispatch => {
	//TODO: link to config
	const res = await fetch('./json/items.json');
	const res1 = await res.json();
	dispatch({
		type: FETCH_ITEMS,
		payload: res1
	});
}
export const sortItems = (criteria) => {
	return {
		type: SORT_ITEMS,
		payload: criteria
	}
}
export const filterItems = (criteria) => {
	return {
		type: FILTER_ITEMS,
		payload: criteria
	}
}
