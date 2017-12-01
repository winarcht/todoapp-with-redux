import { SET_TASKBOX } from './../Conf';

export default function setTaskBox(value) {
	return {
		type: SET_TASKBOX,
		value
	}
}