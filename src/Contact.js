import React from 'react';


const Contact = ({contact, contactChanged, selected}) =>
 
		<li className={selected ? 'selected':''} onClick = {() => {contactChanged(contact)}}>
			<a>{contact.name}</a>
		</li>


export default Contact;