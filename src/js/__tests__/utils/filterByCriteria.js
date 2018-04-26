import {
	getValuesById,
	filterByCriteria
} from '../../utils/filterByCriteria';
describe('utils filter', () => {
	it('gets all possible values by provided id', () => {
		expect(getValuesById([], '')).toEqual([]);
		expect(getValuesById([
			{
				name: 'Kate'
			}, {
				name: 'Kate'
			}, {
				name: 'Jack'
			}
		], 'name')).toEqual([
			{
				value: 'Kate',
				label: 'Kate'
			}, {
				value: 'Jack',
				label: 'Jack'
			}
		]);
	});
	it('filters an array by criteria', () => {
		expect(filterByCriteria([{
				brand: '1'
			}, {
				brand: '3'
			}, {
				brand: '11'
			}
		], {
			brand: [
				{
					value: '1'
				}, {
					value: '11'
				}
			]
		})).toEqual([
			{
				brand: '1'
			}, {
				brand: '11'
			}
		]);
	});
	it('filters an array by criteria', () => {
		expect(filterByCriteria([{
				brand: '1',
				type: 'r'
			}, {
				brand: '3',
				type: 'g'
			}, {
				brand: '11',
				type: 'k'
			}
		], {
			type: [
				{
					value: 'g'
				}
			]
		})).toEqual([
			{
				brand: '3',
				type: 'g'
			}
		]);
	});
	it('filters an array by criteria', () => {
		expect(filterByCriteria([{
				brand: '1',
				type: 'r'
			}, {
				brand: '3',
				type: 'g'
			}, {
				brand: '11',
				type: 'k'
			}
		], {
			type: [
				{
					value: 't'
				}
			]
		})).toEqual([{
				brand: '1',
				type: 'r'
			}, {
				brand: '3',
				type: 'g'
			}, {
				brand: '11',
				type: 'k'
			}
		]);
	});
	it('filters an array by criteria', () => {
		expect(filterByCriteria([{
				brand: '1',
				type: 'r'
			}, {
				brand: '3',
				type: 'g'
			}, {
				brand: '11',
				type: 'k'
			}
		], {
			type: [
				{
					value: 'g'
				}
			],
			brand: [{
				value: '3'
			}]
		}, )).toEqual([{
				brand: '3',
				type: 'g'
			}
		]);
	});
});
