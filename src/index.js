import 'materialize-css/dist/css/materialize.min.css';
import 'react-select/dist/react-select.css';
import React from 'react';
import ReactDom from 'react-dom';
import {
	Provider
} from 'react-redux';
import {
	createStore,
	applyMiddleware
} from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './js/reducers';
import App from './js/components/App';
import registerServiceWorker from './registerServiceWorker';
const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
ReactDom.render(<Provider store={store}><App/></Provider>, document.querySelector('#root'));
registerServiceWorker();
