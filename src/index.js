import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/root/App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';

// 6. Adım -> base componentimiz Provider içine
// alınarak react redux kullanımı sağlanmış
// olur. Ayrıca store'da burada çağırılarak
// base altındaki bütün componentlerin
// erişimine açılmış olur
import { Provider } from 'react-redux';
import configureStore from "./redux/reducers/configureStore"
const store = configureStore();

ReactDOM.render(

    <Provider store = {store}>
        <App />
    </Provider>
    
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
