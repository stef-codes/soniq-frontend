import React from 'react';
import ReactDOM from 'react-dom';
import {CreateStore, applyMiddleware} from 'redux'; 
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'; 
import {Provider} from 'react-redux'; 
import rootReducer from './reducers/rootReducer'
import App from './App';

const store = CreateStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>


, document.getElementById('root'));
