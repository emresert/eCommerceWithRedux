import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/root/App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import "alertifyjs/build/css/alertify.min.css"
import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import configureStore from "./redux/reducers/configureStore"


const store = configureStore();

ReactDOM.render(

    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>

    , document.getElementById('root'));


serviceWorker.unregister();
