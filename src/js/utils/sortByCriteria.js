import _ from 'lodash';
export const sortByCriteria = (arr, criteria) => {

	if (criteria) {
		let criteriaArr = criteria.split('_');
		return _.orderBy(arr, [criteriaArr[0]], [criteriaArr[1]])
	}
	return [...arr];
}
