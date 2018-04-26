import {
	FETCH_ITEMS
} from '../../actions/types';
import itemsReducer from '../../reducers/itemsReducer';
describe('items reducer', () => {
	it('handles action with uknown type', () => {
		expect(itemsReducer(undefined, {})).toBeInstanceOf(Array);
	});
	it('handles action with FETCH_ITEMS type', () => {
		const action = {
			type: FETCH_ITEMS,
			payload: []
		}
		expect(itemsReducer([1, 2], action)).toEqual([]);
	});
	it('handles action with FETCH_ITEMS type', () => {
		let action = {
			type: FETCH_ITEMS,
			payload: [1, 2]
		}
		expect(itemsReducer([3], action)).toEqual([1, 2]);
	});
});
