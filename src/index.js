import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/root/App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';

// Provide store'u parametre olarak göndermek
// için import edildi
import { Provider } from 'react-redux';
// store oluşturmak için import edildi
// çünkü içerisinde createStore metodunu
// barındırır.
import configureStore from "./redux/reducers/configureStore"

// store değişkeni tanımlandı
const store = configureStore();

ReactDOM.render(

    // Her componentin erişebilmesi için App base
    // componenti Provider arasına alındı 
    <Provider store={store}>
        <App />
    </Provider>

    , document.getElementById('root'));


serviceWorker.unregister();
