import React, { Component } from 'react';
import AddTodo from './AddTodo';

import './styles/css/App.css';

export default class App extends Component {
	render() {
		return (
			<div id="todo-app">
				<AddTodo />
			</div>
		);
	}
}
