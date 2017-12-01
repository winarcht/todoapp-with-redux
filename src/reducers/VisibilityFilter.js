import { SET_FILTER, VISIBILITY_FILTER } from './../Conf';

export default function visibilityFilter(state = VISIBILITY_FILTER.SHOW_ALL, action) {

	switch (action.type) {
		case SET_FILTER:
			return action.filter;

		default:
			return state;
	}
}