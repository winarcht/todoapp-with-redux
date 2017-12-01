import { combineReducers } from 'redux';
import visibilityFilter from './VisibilityFilter';
import todo from './Todo';
import taskBox from './TaskBox';

const todoApp = combineReducers({
	taskBox,
	todo,
	visibilityFilter
});

export default todoApp;