import { SET_FILTER } from './../Conf';

export default function setFilter(filter) {
	return {
		type: SET_FILTER,
		filter
	}
}