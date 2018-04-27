import {
	FILTER_ITEMS
} from '../../actions/types';
import {
	FILTER_BY_BRAND,
	FILTER_BY_TYPE
} from '../../config/filterBy';
import filterReducer from '../../reducers/filterReducer';
describe('filter reducer', () => {
	it('handles action with uknown type', () => {
		expect(filterReducer(undefined, {})).toBeInstanceOf(Object);
	});
	it('handles action with FILTER_ITEMS type and provided brand', () => {
		const action = {
			type: FILTER_ITEMS,
			payload: {
				[FILTER_BY_BRAND]: [1, 2, 3]
			}
		}
		expect(filterReducer({
			[FILTER_BY_TYPE]: [5, 6, 7]
		}, action)).toEqual({
			[FILTER_BY_BRAND]: [1, 2, 3],
			[FILTER_BY_TYPE]: [5, 6, 7]
		});
	});
	it('handles action with FILTER_ITEMS type and provided type', () => {
		const action = {
			type: FILTER_ITEMS,
			payload: {
				[FILTER_BY_TYPE]: [1, 2, 3]
			}
		}
		expect(filterReducer({
			[FILTER_BY_BRAND]: [5, 6, 7]
		}, action)).toEqual({
			[FILTER_BY_BRAND]: [5, 6, 7],
			[FILTER_BY_TYPE]: [1, 2, 3]
		});
	});
});
