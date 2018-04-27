import React from 'react';
import {
	shallow
} from 'enzyme';
import {
	SearchPanel,
	mapStateToProps
} from '../../components/SearchPanel';
describe('SearchPanel component', () => {
	it('renders without crashing', () => {
		shallow(<SearchPanel />);
	});
	it('has correct mapStateToProps', () => {
		expect(mapStateToProps([])).toEqual({
			brands: [],
			types: []
		});
		expect(mapStateToProps({
			items: [{
				brand: '1',
				type: '1'
		}, {
				brand: '1',
				type: '2'
		}, {
				brand: '1',
				type: '2'
		}, {
				brand: '3',
				type: '1'
		}, {
				brand: '1',
				type: '3'
		}]
		})).toEqual({
			brands: [{
				value: '1',
				label: '1'
			}, {
				value: '3',
				label: '3'
			}],
			types: [{
					value: '1',
					label: '1'
			},
				{
					value: '2',
					label: '2'
			},
				{
					value: '3',
					label: '3'
			}]
		});
	});
});
