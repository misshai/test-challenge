import React, {
	Component
} from 'react';
import Select from 'react-select';
import {
	connect
} from 'react-redux';
import {
	SORT_BY_OPTIONS
} from '../config/sortBy';
import {
	FILTER_BY_BRAND,
	FILTER_BY_TYPE
} from '../config/filterBy';
import {
	getValuesById
} from '../utils';
import {
	sortItems,
	filterItems
} from '../actions';
export class SearchPanel extends Component {
	constructor() {
		super();
		this.state = {
			sortBy: '',
			filterByType: '',
			filterByBrand: ''
		};
	}
	onSortChange(value) {
		this.setState({
			sortBy: value
		});
		this.props.sortItems(value);
	}
	onFilterByBrandChange(value) {
		console.log(value)
		this.setState({
			filterByBrand: value
		});
		this.props.filterItems({
			[FILTER_BY_BRAND]: value
		});
	}
	onFilterByTypeChange(value) {
		this.setState({
			filterByType: value
		});
		this.props.filterItems({
			[FILTER_BY_TYPE]: value
		});
	}
	render() {
		const customStyles = {
			container: () => ({
				position: 'relative',
				width: '33%',
				height: 'auto'
			}),
			selectContainer: (base) => ({ ...base,
				height: '100%'
			})
		};
		return <div className='search-panel'><Select placeholder='Sort By...' styles={customStyles}  onBlurResetsInput={false} onSelectResetsInput={false} options={SORT_BY_OPTIONS} clearable={true} name='selected-state' value={this.state.sortBy} onChange={(value) => this.onSortChange(value)} searchable={false}/>
	<Select placeholder='Type...' styles={customStyles}  onBlurResetsInput={false} isMulti={true} onSelectResetsInput={false} options={this.props.types} clearable={true} name='selected-state' value={this.state.filterByType} onChange={(value) => this.onFilterByTypeChange(value)} searchable={false}/>
	<Select placeholder='Brand...' styles={customStyles}  onBlurResetsInput={false} isMulti={true} onSelectResetsInput={false} options={this.props.brands} clearable={true} name='selected-state' value={this.state.filterByBrand} onChange={(value) => this.onFilterByBrandChange(value)} searchable={false}/>
		</div>
	}
}
export function mapStateToProps({
	items
}) {
	return {
		brands: getValuesById(items, 'brand'),
		types: getValuesById(items, 'type')
	}
}
export default connect(mapStateToProps, {
	sortItems,
	filterItems
})(SearchPanel);
