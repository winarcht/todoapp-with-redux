import React, { Component } from 'react';
import { connect } from 'react-redux';

import addTodo from './actions/AddTodo';
import setTaskBox from './actions/SetTaskBox';

class AddTodo extends Component {
	handleSubmit(e) {
		e.preventDefault();

		if (this.taskInput.value.trim() !== '') {
			this.props.onSubmit(this.taskInput.value.trim());
		}		
	}

	handleChange(e) {
		this.props.onChange(this.taskInput.value);	
	}

	render() {
		const { taskBox } = this.props;

		return (
			<div id="addtodo-form">
				<form onSubmit={this.handleSubmit.bind(this)}>
					<input type="text" name="task" placeholder="What do you want to do?" autoComplete="off" value={taskBox} ref={(input) => this.taskInput = input} onChange={this.handleChange.bind(this)} />
					<input type="submit" value="Add" />
				</form>
			</div>
		);
	}
}

/**
 * Function to link Redux state with this component
 * taskBox is used to save the current state of the task input,
 * thus creating a controllable component.
 */
const mapStateToProps = (state) => {
	return {
		taskBox: state.taskBox
	}
}

/**
 * Function to link Redux dispatch method with this component
 * - onChange is used to control the current state of the task input, as it is a controllable component.
 * - onSubmit is used to save the new task, then clear the task input.
 */
const mapDispatchToProps = (dispatch) => {
	return {
		onChange: (value) => {
			dispatch(setTaskBox(value));
		},

		onSubmit: (value) => {
			dispatch(addTodo(value));
			dispatch(setTaskBox(''));
		}
	}
}

/**
 * Connect the state and dispatch method from Redux store with this component.
 */
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(AddTodo);