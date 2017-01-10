import React from 'react';
import Catagories from './Catagories.js';


class ContactList extends React.Component{
	constructor(props) {
		super(props);
		this.state={
			search:'',
			contacts:props.contacts
		}
		
	}
	updateSearch(event){
		//console.log(event.target.value);
		this.setState({search: event.target.value.substr(0,20)});
	}

	addContact(event){
		event.preventDefault();
		let name= this.refs.name.value;
		let phone= this.refs.phone.value;
		let id= Math.floor((Math.random()*100)+1)
		this.setState({
			contacts:this.state.contacts.concat({id, name, phone})
		});
		his.refs.name.value = '';
		his.refs.phon.value = '';
	}
	render(){
		let filteredContacts = this.state.contacts.filter(
				(contact) => {
					return contact.name.toLowerCase().indexOf(this.state.search.toLowerCase())!== -1;
				}
			)
		return(
				<div>
					<input type="text" 
							placeholder="Search"
							value={this.state.search} 
							onChange={this.updateSearch.bind(this)}/>
					<form onSubmit={this.addContact.bind(this)}>
						<input type="text" ref="name"/>
						<input type="text" ref="phone"/>
						<button type="submit">Add</button>
					</form>
					<ul>
						{filteredContacts.map((contact) => {
							
							return <Contact contact={contact} item="Hello" key={contact.id}/>
							
							})
						
						}
					</ul>
					
				</div>
			)
	}
}

export default ContactList;