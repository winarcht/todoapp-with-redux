import { ADD_TODO } from './../Conf';

import md5 from 'md5';

export default function addTodo(text) {
	return {
		type: ADD_TODO,
		id: md5(Date.now() + text),
		text
	}
}