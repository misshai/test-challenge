import React, {
	Component
} from 'react';
import {
	ResponsiveImage,
	ResponsiveImageSize
} from 'react-responsive-image';
import {
	formatPrice,
	formatImageURL
} from '../utils';
import {
	IMAGE_SIZE_TO_RESOLUTION
} from '../config/imageSize';
class Item extends Component {
	renderImageByResolution() {
		return IMAGE_SIZE_TO_RESOLUTION.map(({
			resolution,
			size
		}) => {
			return <ResponsiveImageSize key={resolution} minWidth={resolution} path={formatImageURL(this.props.image, size)}/>
		});
	}
	render() {
		return(<div className='row item'>
			<div className='col s12 '>
				<div className='card product-item'>
					<div className='card-image product-item-image'>
						<ResponsiveImage alt={this.props.name}>
							{this.renderImageByResolution()}
						</ResponsiveImage>

					</div>
					<div className='card-content'>
						<span className='card-title'>{this.props.name}</span>
						<p className='product-type'>{this.props.type}</p>
						<p className='product-price'>{	formatPrice(this.props.price)}
							/{(this.props.size)?this.props.size.toLowerCase():''}</p>
					</div>
					<a className='btn-floating halfway-fab waves-effect waves-light basket-button right'>
						<i className='material-icons'>add_shopping_cart</i>
					</a>
				</div>
			</div>
		</div>);
	}
};
export default Item;
