import _ from 'lodash';
import {
	FILTER_BY_BRAND,
	FILTER_BY_TYPE
} from '../config/filterBy';
export const filterByCriteria = (arr, criteria) => {
	let resultByBrand = [];
	let resultByType = [];
	let result = [];
	if(criteria[FILTER_BY_BRAND]) {
		criteria[FILTER_BY_BRAND].map((elem) => {
			const filtered = _.filter(arr, [FILTER_BY_BRAND, elem.value]);
			return resultByBrand = [
				...resultByBrand,
				...filtered
			];
		});
	}
	if(criteria[FILTER_BY_TYPE]) {
		criteria[FILTER_BY_TYPE].map((elem) => {
			const filtered = _.filter(arr, [FILTER_BY_TYPE, elem.value]);
			return resultByType = [
				...resultByType,
				...filtered
			];
		});
	}
	if(resultByBrand.length > 0 && resultByType.length > 0) {
		result = _.intersectionWith(resultByBrand, resultByType, _.isEqual);
	} else if(resultByBrand.length > 0) {
		result = resultByBrand;
	} else if(resultByType.length > 0) {
		result = resultByType;
	} else {
		result = arr;
	}
	return result;
}
export const getValuesById = (arr, property) => {
	const uniqueValues = _.uniqBy(arr, property).map((elem) => {
		return {
			value: elem[property],
			label: elem[property]
		}
	});
	return uniqueValues;
}
