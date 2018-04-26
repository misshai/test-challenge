import React from 'react';
import {
	shallow
} from 'enzyme';
import Header from '../../components/Header';
describe('Header component', () => {
	it('renders without crashing', () => {
		shallow(<Header />);
	});
	it('renders logo message', () => {
		const wrapper = shallow(<Header />);
		const logo = 'Flaconi Challenge';
		expect(wrapper.contains(logo)).toEqual(true);
	});
});
