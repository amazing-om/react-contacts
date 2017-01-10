import React from 'react';


const Category = ({category, categoryChanged, selected}) =>
	
		<li className={selected ? 'selected':''} onClick={()=>{categoryChanged(category)}} >
			<a>{category.name}</a>
		</li>

export default Category;