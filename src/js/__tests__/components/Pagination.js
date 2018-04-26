import React from 'react';
import {
	shallow
} from 'enzyme';
import {
	Pagination
} from '../../components/Pagination';
describe('Pagination component', () => {
	it('renders without crashing', () => {
		shallow(<Pagination />);
	});
});
