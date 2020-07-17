import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import 'poke-i18n'; // initializate i18n
import './util/no-focus-event';

ReactDOM.render(<App />, document.getElementById('root'));
