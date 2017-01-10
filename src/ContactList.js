import React from 'react';
import Contact from './Contact.js';



class ContactList extends React.Component{
	constructor(props) {
		super(props);
		this.state={
			search:''
		}
		this.contactChanged = this.contactChanged.bind(this);
	}
	updateSearch(event){
		//console.log(event.target.value);
		this.setState({search: event.target.value.substr(0,20)});
	}
	contactChanged(contact){
		console.log('contact change', contact.id, this);
		this.setState({selected:contact.id});
		this.props.contactChanged(contact);

	}
	
	render(){
		let filteredContacts = this.props.contacts.filter(
				(contact) => {
					return contact.name.toLowerCase().indexOf(this.state.search.toLowerCase())!== -1;
				}
			)
		return(
				<div>
					<input id="search" type="text" 
							placeholder="Search"
							value={this.state.search} 
							onChange={this.updateSearch.bind(this)}/>
					<ul>
						{filteredContacts.map((contact) => {
							
							return
							<Contact contact={contact} selected={contact.id == this.state.selected} 
										contactChanged={this.contactChanged} key={contact.id}/>
							
							})
						
						}
					</ul>
					
				</div>
			)
	}
}

export default ContactList;