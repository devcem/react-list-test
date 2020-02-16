import React, { Component } from 'react';

class List extends Component {
	constructor(props) {
		super(props);
		
		this.items = ['cem', 'uğur'];
		this.inputContent  = '';
		this.itemsRendered = [];

		this.myInput = false;

		this.addItem = (value) => {
			this.items.push(this.inputContent);
			this.myInput.value = '';

			this.forceUpdate();
		};

		this.inputChange = (event) => {
			this.inputContent = event.target.value;
			this.myInput = event.target;
		}
	}

	render() {
		this.itemsRendered = this.items.map((value) => 
			<li>{value}</li>
		);

		this.listItemView = (
			<div>
				<h1>Todo List</h1>
				<input type="text" onChange={this.inputChange} />
				<button onClick={this.addItem}>Add</button>
				<ul>{this.itemsRendered}</ul>
			</div>
		)

		return <div>{this.listItemView}</div>;
	}
}

export default List;