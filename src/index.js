import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
// my own imports
import App from './components/App';
import reducers from './reducers';

// provider tab at very top of componenet hierarchy
ReactDOM.render(
    <Provider store={createStore(reducers)}>
        <App />
    </Provider>, 
    document.querySelector('#root')
);