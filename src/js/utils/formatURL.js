const DEFAULT_SIZE = '215x';
export const formatImageURL = (url, size) => {
	return(url) ? url.replace(DEFAULT_SIZE, size) : '';
}
