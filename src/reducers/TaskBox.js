import { SET_TASKBOX } from './../Conf';

export default function taskBox(state = '', action) {
	switch (action.type) {
		case SET_TASKBOX:
			return action.value;

		default:
			return state;
	}
}