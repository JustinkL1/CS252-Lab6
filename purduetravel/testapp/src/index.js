import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './store';
import './index.css';
import App from './App';
import serviceWorker from './serviceWorker';

ReactDOM.render(
    <Provider store={store}>
        <App />
        {/* <Main /> */}
    </Provider>,
    document.getElementById('root')
);

serviceWorker();