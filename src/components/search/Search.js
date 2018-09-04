import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

export default class Search extends Component {

	constructor (props) {
		super(props)
		this.state = {
			searchText : '',
			amount : 15,
			apiurl : 'https://pixbay.com/api',
			apiKey : '3140116-ece91c2045b92269443c366ba',
			images : [] 
		}
	}

	render() {
		return (
			<div>
				<TextField 
					name="searchText"
					value={this.state.searchText}
					onChange={this.onTextChange}
					floatingLabelText="Search For Images"
					fullWidth={true}
				/>
				<br/>
				<SelectField
					name = "amount"
					floatingLabelText="Amount"
					value={this.state.amount}
					onChange={this.onAmountChange}
				>
					<MenuItem value={5}  primaryText="5"   />
					<MenuItem value={10} primaryText="10" />
					<MenuItem value={15} primaryText="15" />
					<MenuItem value={30} primaryText="30" />
					<MenuItem value={50} primaryText="50" />
				</	SelectField>
				<br/>
			</div>
		);
	}
}