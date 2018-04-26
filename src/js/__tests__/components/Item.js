import React from 'react';
import {
	shallow
} from 'enzyme';
import Item from '../../components/Item';
describe('Item component', () => {
	it('renders without crashing', () => {
		shallow(<Item />);
	});
});
