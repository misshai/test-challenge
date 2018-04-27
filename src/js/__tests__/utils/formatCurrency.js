import {
	formatPrice
} from '../../utils/formatCurrency';
describe('utils money', () => {
	it('converts cents to EUR', () => {
		expect(formatPrice(200)).toEqual('€2.00');
		expect(formatPrice(395)).toEqual('€3.95');
		expect(formatPrice(0)).toEqual('€0.00');
	});
});
