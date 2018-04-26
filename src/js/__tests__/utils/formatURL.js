import {
	formatImageURL
} from '../../utils/formatURL';
describe('utils URL formatter', () => {
	it('replaces 215x to provided dimensions', () => {
		expect(formatImageURL('http://test215x.com', '15')).toEqual('http://test15.com');
		expect(formatImageURL('http://test225x.com', '15')).toEqual('http://test225x.com');
		expect(formatImageURL('http://test215x.com', '')).toEqual('http://test.com');
		expect(formatImageURL('', '15')).toEqual('');
		expect(formatImageURL(undefined, '15')).toEqual('');
	});
});
