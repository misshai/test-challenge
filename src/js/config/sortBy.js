export const SORT_BY_BRAND_ASC = 'brand_asc';
export const SORT_BY_BRAND_DESC = 'brand_desc';
export const SORT_BY_NAME_ASC = 'name_asc';
export const SORT_BY_NAME_DESC = 'name_desc';
export const SORT_BY_PRICE_ASC = 'price_asc';
export const SORT_BY_PRICE_DESC = 'price_desc';
export const SORT_BY_RATING = 'rating_asc';
export const SORT_BY_OPTIONS = [
	{
		label: 'Brand A-Z',
		value: SORT_BY_BRAND_ASC
	}, {
		label: 'Brand Z-A',
		value: SORT_BY_BRAND_DESC
	}, {
		label: 'Name A-Z',
		value: SORT_BY_NAME_ASC
	}, {
		label: 'Name Z-A',
		value: SORT_BY_NAME_DESC
	}, {
		label: 'Price Low To High',
		value: SORT_BY_PRICE_ASC
	}, {
		label: 'Price High To Low',
		value: SORT_BY_PRICE_DESC
	}, {
		label: 'Rating',
		value: SORT_BY_RATING
	}
];
