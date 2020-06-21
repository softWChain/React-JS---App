import React, { Component } from 'react';

export default class TodoList extends Component {

	constructor() {
		super();
		this.state = { todoFilter: 'All' };
	}

	doneTask = (e) => {

		this.props.doneTask(e.target.parentNode.id);

	}
	removeTask = (e) => {
		this.props.removeTask(e.target.parentNode.id);

	}

	todoListFilter = (param) => {
		this.setState({ todoFilter: param });
		const activeBtn = document.getElementById('filterBtn' + param);
		document.getElementById('filterBtnAll').classList.remove('active');
		document.getElementById('filterBtnActive').classList.remove('active');
		document.getElementById('filterBtnCompleted').classList.remove('active');

		activeBtn.classList.add('active');

	};

	render() {
		let itemsLeft = 0;
		const items = this.props.propsKey.map((arrayValue, arrayIndex) => {
			if (arrayValue.status === 'passive') {
				itemsLeft++;
			}

			if (this.state.todoFilter === 'All' ||
				(this.state.todoFilter === 'Active' && arrayValue.status === 'passive') ||
				(this.state.todoFilter === 'Completed' && arrayValue.status === 'active')) {

				let task_id = 'task_' + arrayIndex;
				return (
					<li key={arrayIndex} id={task_id} className={arrayValue.status}>
						<span className="id">{arrayIndex + 1}</span>
						<span className="title">{arrayValue.text}</span>
						<span className="type" onClick={this.doneTask} />
						<span className="delete" onClick={this.removeTask} />
					</li>
				)

			}

		});
		return (

			<div className="todo-list type1">
				<ul>
					{items}
				</ul>
				<div className="todo-filter">
					<div className="left">
						<span>{itemsLeft} items left</span>
					</div>
					<div >
						<ul className="right" id="listChanger" >
							<li className="active" id="filterBtnAll"><span onClick={() => this.todoListFilter('All')} >All</span></li>
							<li id="filterBtnActive"><span onClick={() => this.todoListFilter('Active')} >Active</span></li>
							<li id="filterBtnCompleted"><span onClick={() => this.todoListFilter('Completed')} >Completed</span></li>
						</ul>
					</div>
				</div>
			</div>
		);

	}
}
