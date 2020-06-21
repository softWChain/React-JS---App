import React, { Component } from 'react';
import TodoList from './todoList.js';
import { TodoForm } from './todoForm';
import { Footer } from './inc/footer';
import { Header } from './inc/header';


export default class App extends Component {

	constructor() {
		super();
		this.state = {
			myTasks: [
				{ text: "Yapılan ilk iş", status: "passive" },
				{ text: "Kitap oku", status: "passive" },
				{ text: "Müzik dinle", status: "passive" },
				{ text: "Yabancı dil öğren", status: "passive" }

			]
		};
		this.addTask = this.addTask.bind(this);
		this.removeTask = this.removeTask.bind(this);
		this.doneTask = this.doneTask.bind(this);

	}

	addTask(val) {
		let updatedList = this.state.myTasks;
		updatedList.push({ text: val, status: "passive" });
		this.setState({ myTasks: updatedList });
	}

	doneTask(task_id) {
		task_id = task_id.replace('task_', '');
		let updatedList = this.state.myTasks;
		let newstatus = 'active';
		let currentStatus = updatedList[task_id].status;

		if (currentStatus === 'active') {
			newstatus = 'passive';
		}
		updatedList[task_id].status = newstatus;
		this.setState({ myTasks: updatedList });

	}
	removeTask(task_id) {
		task_id = task_id.replace('task_', '');
		let updatedList = this.state.myTasks;
		updatedList.splice(task_id, 1);
		this.setState({ myTasks: updatedList });
	}

	render() {
		return (
			<div className="content">
				<Header />
				<TodoForm propTask={this.addTask} />
				<TodoList propsKey={this.state.myTasks}
					doneTask={this.doneTask}
					removeTask={this.removeTask} />
				<Footer />
			</div>
		);
	}
}
