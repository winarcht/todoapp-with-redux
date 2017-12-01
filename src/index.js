import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

import todoApp from './reducers';
import registerServiceWorker from './registerServiceWorker';

const middleware = applyMiddleware(logger);
const store = createStore(todoApp, middleware);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>, 
	document.getElementById('root')
);

registerServiceWorker();
