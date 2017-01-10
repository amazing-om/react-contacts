import React from 'react';
import Category from './Category';


class Categories extends React.Component{
	constructor(props) {
        super(props);
        this.state = {

        }

        this.categoryChanged = this.categoryChanged.bind(this);
    }

	categoryChanged(category) {
		//event.preventDefault();
		// console.log('catagory change', category.id, this);
		//this.setState({selClass: " selected"});
		this.props.categoryChanged(category);
		this.setState({selected:category.id});
	}
	
	render(){
		//const self = this;
		//console.log(this.props.catagories);
		return(
			<ul>
				{
					this.props.categories.map((category)=>{
						return <Category  selected={category.id == this.state.selected} categoryChanged={this.categoryChanged} category={category} key={category.id} />
					})
				}
			</ul>
		)
	}
}

export default Categories;