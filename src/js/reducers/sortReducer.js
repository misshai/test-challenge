import {SORT_ITEMS} from '../actions/types';
import {SORT_BY_RATING} from '../config/sortBy';

export default(state = SORT_BY_RATING, action) => {
	switch (action.type) {
		case SORT_ITEMS:
			return action.payload.value;
		default:
			return state;
	}
}
