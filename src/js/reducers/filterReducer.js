import {
	FILTER_ITEMS
} from '../actions/types';
import {
	FILTER_BY_BRAND,
	FILTER_BY_TYPE
} from '../config/filterBy';
export default(state = {}, action) => {
	switch(action.type) {
	case FILTER_ITEMS:
		{
			if(action.payload[FILTER_BY_BRAND]) {
				return { ...action.payload,
						[FILTER_BY_TYPE]: state[FILTER_BY_TYPE]
				};
			} else if(action.payload[FILTER_BY_TYPE]) {
				return { ...action.payload,
						[FILTER_BY_BRAND]: state[FILTER_BY_BRAND]
				};
			}
			return state;
		}
	default:
		return state;
	}
}
