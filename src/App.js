import React from 'react';
import ReactDOM from 'react-dom';
import ContactList from './ContactList';
import Categories from './Categories';
import ContactCard from './ContactCard';

let categories = [{
    id: '0',
    name: 'All'
},{
    id: 'abc',
    name: 'Myntra Contacts'
},{
    id: 'def',
    name: 'Personal Contacts'
}];

let contacts = [{
    id: 1,
    name: 'Apple Inc',
    belongsTo: ['0','abc']
},{
    id: 2,
    name: 'Om',
    belongsTo: ['0','def'
},{
    id: 3,
    name: 'Ved',
    belongsTo: ['''abc'
}];

let contactCards =[{
	id:'x1',
	name:'Apple Inc',
	img:'default.png',
	number:'1800MYAPPLE',
	mail:'apple@apple.com',
	address:'Work 1infinite loop Cupertiono CA 95014 United States',
	note:'',
	belongsTo:['xyz','abc']

},{
	id:'x2',
	name:'Om Mishra',
	img:'default.png',
	number:'123 12345 1234',
	mail:'om@mail.com',
	address:'Flat No-403, Rajarajeswari Nagar, Bangalore',
	note:'',
	belongsTo:['xyz','def']

},{
	id:'x3',
	name:'Ved Mishra',
	img:'default.png',
	number:'123 12345 1334',
	mail:'ved@mail.com',
	address:'Flat No-403, Rajarajeswari Nagar, Bangalore',
	note:'',
	belongsTo:['xyz','abc']

}];

class App extends React.Component{
	constructor(props) {
        super(props);
        this.state = {
        	selected: null,
        	selectedCategory: null,
        	contacts: []
        }


        this.categoryChanged = this.categoryChanged.bind(this);
        this.contactChanged = this.contactChanged.bind(this);
        this.addContact = this.addContact.bind(this);

        
    }


	categoryChanged(category) {
		//event.preventDefault();
		//console.log('catagory change', category.id, this);
		//this.setState({selClass: " selected"});
		this.setState({selectedCategory:category.id});
	}
	

	componentDidMount() {
		//console.log(contactCards)
		this.setState({
			contacts: contactCards
		});
	}
	contactChanged(contact){
		//console.log('yoy',this);
		this.setState({
			selContact:contact
		});
	}
	addContact(contacts){
		this.setState({

			contacts:this.state.contacts.concat(contacts)
		});
	}

	

	render(){
		console.log(this.state.contact)
		let filteredContacts;
		if(this.state.selectedCategory === null) {
			filteredContacts = this.state.contacts;
		} else {
			filteredContacts = this.state.contacts.filter(
				(contact) => {

					return contact.belongsTo.indexOf(this.state.selectedCategory) !== -1 ;
				}
			)
		}
		return(
				<div>
					<section id="catagories">
						<div className='titleH'>
							<h1>On My Mac</h1>
						</div>
						<Categories categories={categories} categoryChanged={this.categoryChanged}/>
					</section>
					<section id="contact-list">
						{ this.state.contacts.length === 0 ?
						 <ContactList contacts={contactCards} /> 
						 : <ContactList contacts={filteredContacts} contactChanged={this.contactChanged} />
						}
					</section>
					<section id="contact-card">
						<ContactCard  {...this.state.selContact} onAddContact = {this.addContact}/>
					</section>
				</div>
			)
	}
}

ReactDOM.render(<App />, document.getElementById("app"));