import React, {
	Component
} from 'react';
import {
	connect
} from 'react-redux';
import Header from './Header';
import SearchPanel from './SearchPanel';
import Pagination from './Pagination';
import {
	fetchItems
} from '../actions';
import {
	withErrorBoundary
} from './ErrorBoundary';
import '../../scss/App.scss';
class App extends Component {
	componentWillMount() {
		this.props.fetchItems();
	}
	render() {
		return(<div className='App'>
			<Header/>
			<SearchPanel/>
			<Pagination/>
		</div>);
	}
}
export default connect(null, {
	fetchItems
})(withErrorBoundary(App));
