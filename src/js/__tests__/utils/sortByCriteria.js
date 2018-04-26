import {sortByCriteria} from '../../utils/sortByCriteria';
describe('utils sorter', () => {
	it('sorts an empty array', () => {
		expect(sortByCriteria([], null)).toEqual([]);

	});
	it('sorts an array', () => {
		expect(sortByCriteria([
			{
				brand: '1'
			}, {
				brand: '3'
			}, {
				brand: '11'
			}
		], 'brand_asc')).toEqual([
			{
				brand: '1'
			}, {
				brand: '11'
			}, {
				brand: '3'
			}
		]);

	});

});
