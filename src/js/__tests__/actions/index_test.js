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
		let action;
		beforeEach(() => {
			action = sortItems('some string');
		});
		it('has the correct type', () => {
			expect(action.type).toEqual(SORT_ITEMS);
		});
		it('has the correct payload', () => {
			expect(action.payload).toEqual('some string');
		});
	});
	describe('filter items', () => {
		let action;
		beforeEach(() => {
			action = filterItems('some string');
		});
		it('has the correct type', () => {
			expect(action.type).toEqual(FILTER_ITEMS);
		});
		it('has the correct payload', () => {
			expect(action.payload).toEqual('some string');
		});
	});
});
