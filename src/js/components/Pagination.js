import React, {Component} from 'react';
import ReactPaginate from 'react-paginate';
import {connect} from 'react-redux';
import {sortByCriteria, filterByCriteria} from '../utils';
import {ITEMS_PER_PAGE} from '../config/pagination';
import ItemsList from './ItemsList';

class Pagination extends Component {
	constructor() {
		super();
		console.log(this.props)
		this.state = {
			currentPage: 0

		}
	}

	calculateItems() {

		return this.props.items.slice(ITEMS_PER_PAGE * this.state.currentPage, ITEMS_PER_PAGE * this.state.currentPage + ITEMS_PER_PAGE)
	}

	componentWillReceiveProps(nextProps) {
		if (this.state.currentPage + 1 > Math.ceil(nextProps.items.length / ITEMS_PER_PAGE)) {
			this.setState({currentPage: 0});
		}
	}

	getforcePage() {

		return this.state.currentPage;
	}

	handlePageClick = (data) => {
		let selected = data.selected;
		this.setState({currentPage: selected});
		console.log(selected);

	};
	render() {
		return <div>
			<ItemsList items={this.calculateItems()}/>
			<ReactPaginate forcePage={this.getforcePage()} previousLabel={'<'} nextLabel={'>'} breakLabel={<a href = "" > ...</a>} breakClassName='break-me' pageCount={Math.ceil(this.props.items.length / ITEMS_PER_PAGE)} marginPagesDisplayed={2} pageRangeDisplayed={3} onPageChange={this.handlePageClick} containerClassName={'pagination'} subContainerClassName={'pages pagination'} activeClassName={"active"}/>
		</div>
	}
}

function mapStateToProps({items, sortBy, filterBy}) {
	return {
		items: sortByCriteria(filterByCriteria(items, filterBy), sortBy)
	};
}
export default connect(mapStateToProps)(Pagination);
