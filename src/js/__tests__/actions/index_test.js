import {
	SORT_ITEMS,
	FILTER_ITEMS
} from '../../actions/types';
import {
	sortItems,
	filterItems
} from '../../actions';
describe('actions', () => {
	describe('sort items', () => {
		let action = sortItems('some string');
		testAction(action, SORT_ITEMS, 'some string');
	});
	describe('filter items', () => {
		let action = filterItems('some string');
		testAction(action, FILTER_ITEMS, 'some string');
	});
});

function testAction(action, type, payload) {
	it('has the correct type', () => {
		expect(action.type).toEqual(type);
	});
	it('has the correct payload', () => {
		expect(action.payload).toEqual(payload);
	});
}
