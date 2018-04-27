import React, {
	Component
} from 'react';
import Item from './Item';
class ItemsList extends Component {
	renderItems() {
		return(this.props.items) ? this.props.items.map((item) => {
			return <Item key={item.id} {...item}/>
		}) : 'No Items';
	}
	render() {
		return(<div className='items'>
			{this.renderItems()}
		</div>);
	}
}
export default ItemsList;
