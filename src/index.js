import React from 'react';
import {render} from 'react-dom';
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import {  createLogger } from "redux-logger";
import { createStore, applyMiddleware } from "redux";
import rooReducer from "./reducers/reducers";


import 'semantic-ui-css/semantic.min.css';
import AsyncApp from './containers/AsyncApp';
import registerServiceWorker from './registerServiceWorker';


const middleware = [thunk];

if(process.env.NODE_ENV !== 'production'){
    middleware.push(createLogger());
}

const store = createStore(
    rooReducer,
    applyMiddleware(...middleware)
);



render(<Provider store={store}><AsyncApp /></Provider>, document.getElementById('root'));
registerServiceWorker();
