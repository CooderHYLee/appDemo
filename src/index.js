import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import '../node_modules/onsenui/css/onsenui.css'
// import './css/onsen-css-components.css'
// import './css/couponStyle.css'

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
