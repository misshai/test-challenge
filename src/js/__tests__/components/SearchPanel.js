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
	});
});
