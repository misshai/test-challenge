import {
	SORT_ITEMS
} from '../../actions/types';
import {
	SORT_BY_RATING
} from '../../config/sortBy';
import sortReducer from '../../reducers/sortReducer';
describe('sort reducer', () => {
	it('handles action with uknown type', () => {
		expect(sortReducer(undefined, {})).toBeDefined();
	});
	it('sets default state', () => {
		expect(sortReducer(undefined, {})).toEqual(SORT_BY_RATING);
	});
	it('handles action with SORT_ITEMS type and no payload', () => {
		const action = {
			type: SORT_ITEMS,
			payload: {
				value: ''
			}
		}
		expect(sortReducer('', action)).toEqual('');
	});
	it('handles action with SORT_ITEMS type and payload', () => {
		let action = {
			type: SORT_ITEMS,
			payload: {
				value: 'kate'
			}
		}
		expect(sortReducer('cat', action)).toEqual('kate');
	});
});
