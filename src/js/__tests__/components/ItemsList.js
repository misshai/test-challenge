import React from 'react';
import {
	shallow
} from 'enzyme';
import ItemsList from '../../components/ItemsList';
describe('ItemsList component', () => {
	it('renders without crashing', () => {
		shallow(<ItemsList />);
	});
});
