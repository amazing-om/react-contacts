import React from 'react';
//import contacts from './data/Contacts.js';

class ContactCard extends React.Component{

	constructor(props) {
		super(props);
		this.state={

			contacts:[],
			editable:true
		}
	
	}
		
	addContact(event){
		event.preventDefault();
		let contact = {};
		contact.name = this.refs.name.value;
		contact.number = this.refs.number.value;
		contact.mail = this.refs.mail.value;
		contact.note = this.refs.note.value;
		contact.address = this.refs.address.value;
		contact.belongsTo = this.refs.belongsTo.value;
		contact.id= 'x' + Math.floor((Math.random()*100)+1)
		
		this.props.onAddContact([contact]);
	}
	enableForm(event){
		//console.log("12312")
		this.setState({
			editable:false
		});
	}
	render(){
		console.log(this.state.editable);
		return(

			<div>
				<form  onSubmit = {this.addContact}>
					<div className="contact-cards">
						<div className="name-label">
							<div className="image-cropper">
							{ this.prop === null || this.prop === undefined ?
								<img className="rounded" src="./default.png"/>
			    				:<img className="rounded" src={this.props.img}/>
							}
							</div>
							<div className="contact-name">
							{ this.state.editable == false ?
								<input ref='name' disabled value={this.props.name}/>
								:<input ref='name'  value={this.props.name}/>
							}
							</div>
						</div>
						<div className="detail-desc">
							<div className="desc-group">
								<label>Main</label> <input ref='number' disabled={this.state.editable} value={this.props.number}/>
							</div>
							<div className="desc-group">
								<label>Call</label> <span>&#128247; Facetime</span> <span>&#128222; Audio</span>
							</div>
							<div className="desc-group">
								<label>Homepage</label> <input ref='mail' disabled={this.state.editable} href={`maailto:${this.props.mail}`} value={this.props.mail}/>
							</div>
							<div className="desc-group">
								<label>Label</label> <input ref='belongsTo' disabled={this.state.editable} value={this.props.belongsTo} />
							</div>
							<div className="desc-group">
								<label>Work</label> <textarea ref='address' disabled={this.state.editable} value={this.props.address}></textarea>
							</div>
							<div className="desc-group">
								<label>Note</label> <textarea ref='note' disabled={this.state.editable} value={this.props.note} ></textarea>
							</div>
						</div>
					</div>
					<div className="edit-panel">
						<div className="add-section"><button type='submit' className="add-btn">+</button></div>
						<div className="edit-section">
							
								<button className="edit-btn" onClick={this.enableForm}>Edit</button> 
						
							<button className="share-btn">Share</button></div>
					</div>
				</form>
			</div>

			)
	}
}

export default ContactCard;


