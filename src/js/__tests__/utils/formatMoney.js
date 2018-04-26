import {getEurfromCent} from '../../utils/formatMoney';
describe('utils money', () => {
	it('converts cents to EUR', () => {
		expect(getEurfromCent(200)).toEqual('€2.00');
		expect(getEurfromCent(395)).toEqual('€3.95');
		expect(getEurfromCent(0)).toEqual('€0.00');
	});
});
